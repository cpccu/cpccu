import { useContext, useEffect } from "react";
import GalleryCard from "./../Global/GalleryCard";
import GalleryScroll from "../../Context/GalleryScroll/GalleryScroll";
import Data from "./../../../data/GalleryBodyCard.json";

export default function GalleryMain() {
  const { setScrollTarget } = useContext(GalleryScroll);

  useEffect(() => {
    setScrollTarget("gallery");
  });

  return (
    <main
      id="gallery"
      className="flex flex-col gap-14 md:gap-20 lg:gap-32 py-10 md:py-20 lg:py-32 padding"
    >
      {Data.map((item, index) => (
        <GalleryBodyCard key={index} data={item} />
      ))}
    </main>
  );
}

export function GalleryBodyCard({ data }) {
  return (
    <section className="flex flex-col gap-12">
      <div className="flex flex-col gap-7 md:gap-10">
        <div>
          <span className="text-2xl md:text-4xl lg:text-5xl font-thin text-gray-600 border-b-2 pb-2 border-gray-700">
            {data?.header}
          </span>
        </div>
        <p className="text-gray-700 lg:text-lg">{data?.conText}</p>
      </div>
      <GalleryCard Data={data?.element} />
    </section>
  );
}
