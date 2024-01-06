import { fetchMediaData } from "@/lib/find-by-id";
import { ImageLink } from "@/lib/image_link";
import Image from "next/image";

export default async function Details({ params }: { params: any }) {
  const id = params.id;
  const res = await fetchMediaData(id);
  return (
    <div className="lg:max-w-[1400px] lg:mx-auto mx-5 my-20">
      <div className="flex lg:flex-row flex-col items-center justify-start lg:space-x-10">
        <div>
          <Image
            className="rounded-lg"
            src={ImageLink(res.backdrop_path || res.poster_path)}
            width={800}
            height={800}
            alt="img"
          />
        </div>
        <div>
          <h3 className="text-4xl font-bold lg:my-0 my-5">{res?.title || res?.name}</h3>
          <p className="lg:max-w-[500px] my-8 font-medium">{res?.overview}</p>
          <div className="flex items-center justify-between">
            <p>{res?.name ? `Episodes ${res?.number_of_episodes}` : ""}</p>
            <p>{res?.name ? `Season ${res?.number_of_seasons}` : ""}</p>
            <p>{res?.name ? `Air Date ${res?.first_air_date}` : ""}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
