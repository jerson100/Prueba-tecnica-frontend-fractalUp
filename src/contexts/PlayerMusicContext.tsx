import { createContext, useCallback, useMemo, useState } from "react";
import { Track } from "../styled";

interface PlayerMusicContextProps {
  listeningSong: Track | null;
  changeListeningSong: (track: Track) => void;
}

const PlayerMusicContext = createContext<PlayerMusicContextProps | null>(null);

interface PlayerMusicProviderProps {
  children: React.ReactNode | React.ReactNode[];
}

const PlayerMusicProvider = ({ children }: PlayerMusicProviderProps) => {
  const [listeningSong, setListeningSong] = useState<Track | null>(null);

  const changeListeningSong = useCallback((track: Track) => {
    setListeningSong(track);
  }, []);

  const valuesMemo = useMemo(() => {
    return {
      listeningSong,
      changeListeningSong,
    };
  }, [listeningSong, changeListeningSong]);
  return (
    <PlayerMusicContext.Provider value={valuesMemo}>
      {children}
    </PlayerMusicContext.Provider>
  );
};

export { PlayerMusicContext, PlayerMusicProvider };
