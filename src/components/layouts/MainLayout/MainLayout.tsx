import { Outlet } from "react-router-dom";
import Header from "../../commons/Header";
import NavApp from "../../commons/NavApp";
import { ContentStyle, MainLayoutContainerStyle } from "./mainLayout.style";
import MusicPlayer from "../../commons/MusicPlayer";
import { SearchProvider } from "../../../contexts/SearchContext";
import { PlayerMusicProvider } from "../../../contexts/PlayerMusicContext";
import { useCallback, useEffect, useState } from "react";
import { MainLayoutVariants } from "./maintLayoutVariants";
import useMediaQuery from "../../../hooks/useMediaQuery";

const MainLayout = () => {
  const [activeNavBar, setActiveNavBar] = useState(false);
  const isTablet = useMediaQuery("md", "min-width");
  const handleActiveNavBar = useCallback(() => {
    setActiveNavBar((prev) => !prev);
  }, []);
  useEffect(() => {
    //overflow hidden when active navbar in html element
    if (activeNavBar) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }
  }, [activeNavBar]);

  useEffect(() => {
    if (isTablet) {
      document.documentElement.style.overflow = "auto";
    }
  }, [isTablet]);

  return (
    <>
      <NavApp
        active={activeNavBar || isTablet}
        isTablet={isTablet}
        handleActiveNavBar={handleActiveNavBar}
      />
      <PlayerMusicProvider>
        <ContentStyle
          animate={activeNavBar && !isTablet ? "active" : "inactive"}
          variants={MainLayoutVariants}
        >
          <SearchProvider>
            <Header handleActiveNavBar={handleActiveNavBar} />
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
