"use server";
import { BASE_LINK } from "./base_link";

export const Dynamic = async (type: string, series : string) => {
  const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const apiUrl = `${BASE_LINK}${series}/${type}?language=en-US&api_key=${API_KEY}`;
  console.log("API URL:", apiUrl);

  const movies = await fetch(apiUrl, {
    next: { revalidate: 60 * 60 * 24 }
  });

  return movies.json();
};
