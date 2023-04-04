import { Track } from "../styled";

const api = "https://api.deezer.com/search/track";

export const getTracks = async ({
  track,
  signal,
}: {
  track: string;
  signal: AbortSignal;
}): Promise<Track[]> => {
  const tracks = await fetch(
    `
    https://cors-anywhere.herokuapp.com/${api}?q=${track}&limit=11`,
    {
      method: "GET",
      signal,
      headers: {
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  const d = await tracks.json();
  return d?.data;
};
