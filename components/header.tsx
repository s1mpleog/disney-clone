"use client";
import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { movieProps, moviesProps } from "@/types";
import { ImageLink } from "@/lib/image_link";

Autoplay.globalOptions = { delay: 8000 };

export const Header = ({ movie }: movieProps) => {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [
    Autoplay(),
  ]);

  return (
    <div
      className="embla mx-auto -z-50 lg:-mt-40"
      ref={emblaRef}
    >
      <div className="embla__container">
        {movie?.map((item: moviesProps) => (
          <div key={item?.id} className="embla__slide relative lg:h-[800px]">
            <div className="absolute top-[50%] lg:left-20 left-10">
              <p className="lg:text-4xl text-2xl font-bold text-white">
                {item?.title}
              </p>
              <p className="line-clamp-3 lg:max-w-[500px] max-w-[300px] my-5 font-medium text-white">
                {item?.overview}
              </p>
            </div>
            <Image
              className="object-center object-contain"
              src={ImageLink(item?.backdrop_path)}
              alt="banner"
              width={1980}
              height={1080}
              quality={100}
              priority
            />
            {/* <div className="absolute z-50 text-4xl font-bold text-black"> */}
            {/* </div> */}
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-gray-300 dark:to-[#1A1C29]" />
    </div>
  );
};
