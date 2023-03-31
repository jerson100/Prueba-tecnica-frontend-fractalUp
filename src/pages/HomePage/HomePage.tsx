import ListVideo from "../../components/commons/ListVideo";
import VideoDetail from "../../components/commons/VideoDetail";
import usePlayerMusicContext from "../../hooks/usePlayerMusicContext";
import useSearchContext from "../../hooks/useSearchContext";
import { VideoModel } from "../../styled";
import { HomeVideDetailStyle, TitleHomePage } from "./homePage.style";

const artist = {
  id: "1",
  artistname: "Luis Fonsi",
  followers: 1000000,
  img: "https://i.ytimg.com/vi/8Qn_spdM5Zg/maxresdefault.jpg",
  description:
    "Luis Fonsi es un cantante, compositor y productor puertorriqueño de música pop y urbana. Es conocido por ser el autor de la canción Despacito, la canción más escuchada en la historia de Spotify y la canción más reproducida en YouTube con más de 7 mil millones de reproducciones.",
  songname: "Despacito",
  wallpaper: "https://i.ytimg.com/vi/8Qn_spdM5Zg/maxresdefault.jpg",
};

// const videos: VideoModel[] = [
//   {
//     id: "1",
//     author: "Luis Fonsi",
//     img: "https://i.ytimg.com/vi/8Qn_spdM5Zg/maxresdefault.jpg",
//     songname: "Despacito",
//   },
//   {
//     id: "2",
//     author: "Enrique Iglesias",
//     img: "https://i.ytimg.com/vi/8Qn_spdM5Zg/maxresdefault.jpg",
//     songname: "Bailando",
//   },
//   {
//     id: "3",
//     author: "Maluma",
//     img: "https://i.ytimg.com/vi/8Qn_spdM5Zg/maxresdefault.jpg",
//     songname: "Felices los 4",
//   },
//   {
//     id: "4",
//     author: "Josh Baldwin",
//     img: "https://i.ytimg.com/vi/8Qn_spdM5Zg/maxresdefault.jpg",
//     songname: "No Longer Slaves",
//   },
//   {
//     id: "5",
//     author: "Michael Jackson",
//     img: "https://i.ytimg.com/vi/8Qn_spdM5Zg/maxresdefault.jpg",
//     songname: "Billie Jean",
//   },

//   {
//     id: "6",
//     author: "Justin Timberlake",
//     img: "https://i.ytimg.com/vi/8Qn_spdM5Zg/maxresdefault.jpg",
//     songname: "Mirrors",
//   },
//   {
//     id: "7",
//     author: "Time Impala",
//     img: "https://i.ytimg.com/vi/8Qn_spdM5Zg/maxresdefault.jpg",
//     songname: "The Less I Know The Better",
//   },
//   {
//     id: "8",
//     author: "Keane",
//     img: "https://i.ytimg.com/vi/8Qn_spdM5Zg/maxresdefault.jpg",
//     songname: "Somewhere Only We Know",
//   },
//   {
//     id: "9",
//     author: "Shura",
//     img: "https://i.ytimg.com/vi/8Qn_spdM5Zg/maxresdefault.jpg",
//     songname: "2Shy",
//   },
//   {
//     id: "10",
//     author: "Coldplay",
//     img: "https://i.ytimg.com/vi/8Qn_spdM5Zg/maxresdefault.jpg",
//     songname: "Viva La Vida",
//   },
// ];

const HomePage = () => {
  const { loading, tracks, error } = useSearchContext();
  const { changeListeningSong } = usePlayerMusicContext();
  return (
    <>
      <HomeVideDetailStyle>
        <VideoDetail {...artist} />
      </HomeVideDetailStyle>
      <TitleHomePage>Resultados</TitleHomePage>
      <ListVideo
        videos={tracks}
        loading={loading}
        changeListeningSong={changeListeningSong}
      />
    </>
  );
};

export default HomePage;
