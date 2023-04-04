import { createContext, useCallback, useMemo, useState } from "react";
import { Track } from "../styled";

interface PlayerMusicContextProps {
  listeningSong: Partial<Track> | null | undefined;
  songs: Partial<Track>[] | null;
  selectSong: (index: number) => void;
  updateSongs: (songs: Partial<Track>[]) => void;
  nextSong: () => void;
  prevSong: () => void;
}

const PlayerMusicContext = createContext<PlayerMusicContextProps | null>(null);

interface PlayerMusicProviderProps {
  children: React.ReactNode | React.ReactNode[];
}

const PlayerMusicProvider = ({ children }: PlayerMusicProviderProps) => {
  const [songIndex, setSongIndex] = useState<number>(-1);
  const [songs, setSongs] = useState<Partial<Track>[] | null>(null);

  const selectSong = useCallback((index: number) => {
    setSongIndex(index);
  }, []);

  const updateSongs = useCallback((songs: Partial<Track>[]) => {
    setSongs(songs);
  }, []);

  const nextSong = useCallback(() => {
    if (songs && songIndex !== -1) {
      const _songIndex = songs.findIndex((song) => song.id === songIndex);
      if (_songIndex === songs.length - 1) {
        setSongIndex(songs[0].id as number);
      } else {
        setSongIndex(songs[_songIndex + 1].id as number);
      }
    }
  }, [songIndex, songs]);

  const prevSong = useCallback(() => {
    if (songs && songIndex !== -1) {
      const _songIndex = songs.findIndex((song) => song.id === songIndex);
      if (_songIndex === 0) {
        setSongIndex(songs[songs.length - 1].id as number);
      } else {
        setSongIndex(songs[_songIndex - 1].id as number);
      }
    }
  }, [songIndex, songs]);

  const valuesMemo = useMemo(() => {
    return {
      selectSong,
      songs,
      listeningSong:
        songs && songIndex >= 0 ? songs.find((s) => s.id === songIndex) : null,
      updateSongs,
      nextSong,
      prevSong,
    };
  }, [selectSong, songs, songIndex, updateSongs, nextSong, prevSong]);

  return (
    <PlayerMusicContext.Provider value={valuesMemo}>
      {children}
    </PlayerMusicContext.Provider>
  );
};

export { PlayerMusicContext, PlayerMusicProvider };
