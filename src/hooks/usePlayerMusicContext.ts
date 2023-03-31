import { useContext } from "react";
import { PlayerMusicContext } from "../contexts/PlayerMusicContext";

const usePlayerMusicContext = () => {
  const context = useContext(PlayerMusicContext);

  if (!context) {
    throw new Error(
      "usePlayerMusicContext must be used within a PlayerMusicProvider"
    );
  }

  return context;
};

export default usePlayerMusicContext;
