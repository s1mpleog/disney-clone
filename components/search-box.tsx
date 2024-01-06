import { findMovies } from "@/lib/find-movie";
import { redirect } from "next/navigation";

export default function SearchBox() {
  const handleSubmit = async (e: FormData) => {
    "use server";
    const movieName = e.get("search")?.toString();
    const movie = await findMovies(movieName);
    redirect(`/search/${movieName}`);
    return movie.page.results;
  };
  return (
    <form action={handleSubmit}>
      <input
        className="dark:bg-[#1A1C29] bg-transparent py-2 indent-4 rounded-md lg:w-48 w-36"
        type="text"
        placeholder="Search..."
        name="search"
      />
    </form>
  );
}
