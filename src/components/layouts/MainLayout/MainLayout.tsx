import Header from "../../commons/Header";
import NavApp from "../../commons/NavApp";
import { ContentStyle, MainLayoutContainerStyle } from "./mainLayout.style";
import { Outlet } from "react-router-dom";
import MusicPlayer from "../../commons/MusicPlayer";
import { SearchProvider } from "../../../contexts/SearchContext";
import { PlayerMusicProvider } from "../../../contexts/PlayerMusicContext";

const MainLayout = () => {
  return (
    <>
      <NavApp />
      <PlayerMusicProvider>
        <ContentStyle>
          <SearchProvider>
            <Header />
            <MainLayoutContainerStyle>
              <Outlet />
            </MainLayoutContainerStyle>
          </SearchProvider>
        </ContentStyle>
        <MusicPlayer />
      </PlayerMusicProvider>
    </>
  );
};

export default MainLayout;
