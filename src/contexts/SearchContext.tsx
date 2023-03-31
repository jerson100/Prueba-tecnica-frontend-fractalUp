import { createContext, useCallback, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { useTracks } from "../hooks/useTracks";
import { Track } from "../styled";

interface SearchContextProps {
  tracks: Track[];
  track: string;
  loading: boolean;
  error: boolean;
  changeTrack: (track: string) => void;
}

const SearchContext = createContext<SearchContextProps | null>(null);

interface SearchProviderProps {
  children: React.ReactNode | React.ReactNode[];
}

const SearchProvider = ({ children }: SearchProviderProps) => {
  const [track, setTrack] = useState("adele");
  const trackDebounce = useDebounce(track, 500);
  const { tracks, loading, error } = useTracks({ track: trackDebounce });
  const changeTrack = useCallback((track: string) => {
    setTrack(track);
  }, []);
  return (
    <SearchContext.Provider
      value={{ tracks, track, loading, error, changeTrack }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchProvider };
