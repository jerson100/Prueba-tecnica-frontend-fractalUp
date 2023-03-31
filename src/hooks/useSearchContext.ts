import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";

const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context)
    throw new Error(
      "useSearchContext must be used within a SearchContextProvider"
    );
  return context;
};

export default useSearchContext;
