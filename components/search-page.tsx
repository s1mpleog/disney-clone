import { ImageLink } from "@/lib/image_link";
import { movieProps, moviesProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

// @ts-ignore
export default function SearchPage({ movies, name }: movieProps) {
  //   console.log("in search page", movies);
  return (
    <section className="lg:max-w-[1400px] lg:mx-auto mx-5 my-10">
      <h1 className="lg:text-5xl text-3xl font-bold mb-5">
        Results for {movies[0]?.title}
      </h1>
      {movies?.map((movie: moviesProps) => (
        <Link key={movie.id} href={`/details/${movie?.id}`}>
          <div className="flex items-center space-x-10 justify-start mt-14">
            <div>
              <Image
                className="rounded-lg object-cover object-center cursor-pointer shadow-md shadow-gray-900 drop-shadow-xl "
                //   src={IMAGE_LINK+movie?.backdrop_path || IMAGE_LINK+movie?.poster_path || }
                src={
                  movie?.backdrop_path
                    ? ImageLink(movie.backdrop_path)
                    : "/images/placeholder.jpg"
                }
                alt={movie?.title}
                width={400}
                height={400}
                quality={100}
              />
            </div>
            <div>
              <h2 className="font-bold text-lg">{movie?.title}</h2>
              <p className="max-w-[600px] mt-5 line-clamp-4 text-sm font-medium dark:text-gray-400 text-gray-800">
                {movie?.overview}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}
