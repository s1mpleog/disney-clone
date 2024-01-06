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
      className="embla mx-auto -z-50 lg:-mt-40 -mt-24"
      ref={emblaRef}
    >
      <div className="embla__container transition-all translate-y-6">
        {movie?.map((item: moviesProps) => (
          <div key={item?.id} className="embla__slide transition-all duration-200 relative h-[500px] lg:h-[800px]">
            <div className="absolute top-[50%] lg:left-20 left-10">
              <p className="lg:text-4xl text-2xl font-bold text-white">
                {item?.title}
              </p>
              <p className="line-clamp-3 lg:max-w-[500px] max-w-[300px] my-5 font-medium text-white">
                {item?.overview}
              </p>
            </div>
            <div className="lg:h-auto h-[500px]">
            <Image
              className="object-center object-cover lg:h-auto h-[500px]"
              src={ImageLink(item?.backdrop_path)}
              alt="banner"
              width={1920}
              height={1080}
              quality={60}
            />
            </div>
            {/* <div className="absolute z-50 text-4xl font-bold text-black"> */}
            {/* </div> */}
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-gray-300 dark:to-[#1A1C29]" />
    </div>
  );
};
