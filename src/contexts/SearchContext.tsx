import { createContext, useCallback, useState } from "react";

interface SearchContextProps {
  track: string;
  changeTrack: (track: string) => void;
}

const SearchContext = createContext<SearchContextProps | null>(null);

interface SearchProviderProps {
  children: React.ReactNode | React.ReactNode[];
}

const SearchProvider = ({ children }: SearchProviderProps) => {
  const [track, setTrack] = useState("adele");

  const changeTrack = useCallback((track: string) => {
    setTrack(track);
  }, []);
  return (
    <SearchContext.Provider value={{ track, changeTrack }}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchProvider };
