import { Dynamic } from "@/lib/dynamic-movie";
import { movieProps, moviesProps } from "@/types";
import Image from "next/image";
import { ImageLink } from "@/lib/image_link";
import Link from "next/link";

export default async function MovieCard({
  genre,
  type,
  series,
}: {
  genre: string;
  type: string;
  series: string;
}) {
  const newGenre = genre?.toString();
  const res = await Dynamic(newGenre, series);
  const data = res.results;
  const movies = data;
  return (
    <>
      <h4 className="absolute -mt-20 left-10 text-4xl z-50 font-bold">
        {type}
      </h4>
      <div className="flex relative space-x-5 overflow-y-auto flex-shrink-0">
        {movies?.map((movie: moviesProps) => (
          <Link href={`/details/${movie?.id}`}>
            <div
              key={movie?.id}
              className="flex cursor-pointer transform hover:scale-105 transition duration-200 ease-out hover:drop-shadow-lg flex-shrink-0"
            >
              <p className="absolute z-50 bottom-[10%] text-white font-bold left-5 text-xl">
                {movie?.name || movie?.title}
              </p>
              <Image
                className="overflow-y-auto w-fit lg:min-w-[400px] min-w-[280px] h-56 object-cover object-center shadow-md shadow-gray-900 drop-shadow-xl rounded-sm"
                src={ImageLink(movie?.backdrop_path)}
                width={1920}
                height={1080}
                priority
                quality={100}
                alt={movie?.title}
              />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
