// utils/fetchData.js
import { BASE_LINK } from "./base_link";

export const fetchMediaData = async (id: string) => {
  const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  const tvEndpoint = `${BASE_LINK}tv/${id}?external_source=imdb_id&api_key=${API_KEY}`;
  const movieEndpoint = `${BASE_LINK}movie/${id}?external_source=imdb_id&api_key=${API_KEY}`;

  try {
    const tvResponse = await fetch(tvEndpoint, {
      next: { revalidate: 60 * 60 * 24 },
    });

    if (tvResponse.ok) {
      const tvData = await tvResponse.json();
      return tvData;
    }

    const movieResponse = await fetch(movieEndpoint, {
      next: { revalidate: 60 * 60 * 24 },
    });

    if (movieResponse.ok) {
      const movieData = await movieResponse.json();
      return movieData;
    }

    console.error('Both TV and movie endpoints failed to fetch.');
    return null;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};
