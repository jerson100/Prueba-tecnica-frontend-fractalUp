import { useEffect, useState } from "react";
import { breakpoints } from "../configs/sizes";
import { BreakPoints } from "../styled";

const useMediaQuery = (query: BreakPoints, pre: "min-width" | "max-width") => {
  const [matches, setMatches] = useState<boolean>(false);
  useEffect(() => {
    const media = window.matchMedia(`(${pre}: ${breakpoints[query]}px)`);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query, matches]);
  return matches;
};

export default useMediaQuery;
