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
  const { changeListeningSong } = usePlayerMusicContext();
  return (
    <>
      <HomeVideDetailStyle>
        <VideoDetail track={tracks[0]} loading={loading} />
      </HomeVideDetailStyle>
      <TitleHomePage>Resultados</TitleHomePage>
      <ListVideo
        videos={tracks?.slice(1)}
        loading={loading}
        changeListeningSong={changeListeningSong}
      />
    </>
  );
};

export default SearchPage;
