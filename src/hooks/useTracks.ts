import { useEffect, useState } from "react";
import { getTracks } from "../services/track";
import { Track } from "../styled";

const useTracks = (track: string) => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    let abortController: AbortController | null = null;
    if (track !== "") {
      abortController = new AbortController();
      const signal = abortController.signal;
      setLoading(true);
      getTracks({ track, signal })
        .then((tracks) => {
          setTracks(tracks);
          setLoading(false);
        })
        .catch((err) => {
          setError(true);
          setLoading(false);
        });
    }
    return () => {
      setLoading(false);
      abortController?.abort();
    };
  }, [track]);
  return { tracks, loading, error };
};

export { useTracks };
