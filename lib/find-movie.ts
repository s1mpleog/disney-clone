import { BASE_LINK } from "./base_link";

export const findMovies = async (query: string | undefined) => {
  const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  const movies = await fetch(
    `${BASE_LINK}search/movie?query=${query}&api_key=${API_KEY}`,
    {
      next: {revalidate: 60 * 60 * 24}
    }
  );
  return movies.json();
};
