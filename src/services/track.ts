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
    https://corsanywhere.herokuapp.com/${api}?q=${track}&limit=7`,
    {
      method: "GET",
      signal,
      headers: {
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  return (await tracks.json())?.data;
};
