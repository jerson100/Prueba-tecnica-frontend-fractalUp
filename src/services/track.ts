import { Track } from "../styled";

const api = "https://deezerdevs-deezer.p.rapidapi.com/search";

export const getTracks = async ({
  track,
  signal,
}: {
  track: string;
  signal: AbortSignal;
}): Promise<Track[]> => {
  const tracks = await fetch(
    `
    ${api}?q=${track}&limit=11`,
    {
      method: "GET",
      signal,
      headers: {
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "X-RapidAPI-Key": "b6b3b0de06mshc612d246812aff2p1fae78jsn37dfe72ee593",
      },
    }
  );
  const d = await tracks.json();
  return d?.data;
};
