"use server";
import { BASE_LINK } from "./base_link";

export const TopRated = async () => {
  const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  const movies = await fetch(
    `${BASE_LINK}/trending/movie/day?language=en-US&api_key=${API_KEY}`,
    {
      next: {revalidate: 60 * 60 * 24}
    }
  );
  return movies.json();
};
