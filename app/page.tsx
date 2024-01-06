import { Header } from "@/components/header";
import MovieCard from "@/components/movie-card";
import { TopRated } from "@/lib/top-rated";

export default async function Home() {
  const res = await TopRated();
  const data = res.results
  const movie = data
  return (
    <>
    <main className="relative -z-50">
      <Header movie={movie}/>
    </main>

      <MovieCard genre='airing_today' type="" series="tv"  />
      <div className="my-28">
      <MovieCard genre='now_playing' type="Now Playing" series="movie" />
      </div>
      <div className="my-28">
      <MovieCard genre='upcoming' type="Upcoming" series="movie" />
      </div>
      <div className="my-28">
      <MovieCard  genre='tv/day' type="Trending Today" series="trending" />
      </div>
      <div className="mt-28 mb-4">
      <MovieCard  genre='top_rated' type="Top Rated" series="movie" />
      </div>
    </>
  );
}
