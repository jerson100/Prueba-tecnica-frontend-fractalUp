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
      setError(false);
      setTracks([]);
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
      abortController?.abort();
    };
  }, [track]);

  useEffect(() => {
    return () => {
      setLoading(false);
      setError(false);
    };
  }, []);
  return { tracks, loading, error };
};

export { useTracks };
