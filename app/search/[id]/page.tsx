import SearchPage from "@/components/search-page";
import { findMovies } from "@/lib/find-movie"

export default async function page({ params } : any) {
  const name = params.id
  const movie = await findMovies(name);
  const data = movie
  const movies = data.results;
  return (
    <div>
      <SearchPage movies={movies} name={name}/>
    </div>
  )
}
