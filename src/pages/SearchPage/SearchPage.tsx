import { useCallback } from "react";
import ListVideo from "../../components/commons/ListVideo";
import VideoDetail from "../../components/commons/VideoDetail";
import { useDebounce } from "../../hooks/useDebounce";
import usePlayerMusicContext from "../../hooks/usePlayerMusicContext";
import useSearchContext from "../../hooks/useSearchContext";
import { useTracks } from "../../hooks/useTracks";
import { HomeVideDetailStyle, TitleHomePage } from "./homePage.style";

const SearchPage = () => {
  const { track } = useSearchContext();
  const trackDebounce = useDebounce(track, 500);
  const { tracks, loading, error } = useTracks(trackDebounce);
  const { selectSong, updateSongs, listeningSong } = usePlayerMusicContext();

  const handleSelectSong = useCallback(
    (index: number) => {
      selectSong(index);
      updateSongs(tracks);
    },
    [tracks]
  );
  if (error) return <p>Ocurrió un error, vuelva a intentarlo nuevamente</p>;
  return (
    <>
      <HomeVideDetailStyle>
        <VideoDetail
          track={tracks[0]}
          loading={loading}
          selectSong={handleSelectSong}
          selected={!!listeningSong && listeningSong.id === tracks[0]?.id}
        />
      </HomeVideDetailStyle>
      <TitleHomePage>Resultados</TitleHomePage>
      <ListVideo
        videos={tracks?.slice(1)}
        loading={loading}
        selectSong={handleSelectSong}
        selected={listeningSong?.id}
      />
    </>
  );
};

export default SearchPage;
