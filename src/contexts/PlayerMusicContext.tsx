import { createContext, useCallback, useMemo, useState } from "react";
import { Track } from "../styled";

interface PlayerMusicContextProps {
  listeningSong: Partial<Track> | null;
  changeListeningSong: (track: Partial<Track> | null) => void;
}

const PlayerMusicContext = createContext<PlayerMusicContextProps | null>(null);

interface PlayerMusicProviderProps {
  children: React.ReactNode | React.ReactNode[];
}

const PlayerMusicProvider = ({ children }: PlayerMusicProviderProps) => {
  const [listeningSong, setListeningSong] = useState<Partial<Track> | null>(
    null
  );

  const changeListeningSong = useCallback((track: Partial<Track> | null) => {
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
