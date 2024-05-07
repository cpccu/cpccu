import { useContext, useEffect } from "react";
import Data from "./../../../data/GallaryCard.json";
import GalleryCard from "./../Global/GalleryCard";
import GalleryScroll from "../../Context/GalleryScroll/GalleryScroll";

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
      <section className="flex flex-col gap-12">
        <div className="flex flex-col gap-7 md:gap-10">
          <div>
            <span className="text-2xl md:text-4xl lg:text-5xl font-thin text-gray-600 border-b-2 pb-2 border-gray-700">
              Our last Meetup in 2024
            </span>
          </div>
          <p className="text-gray-700 lg:text-lg">
            Etiam vitae tortor. Curabitur nisi. In hac habitasse platea
            dictumst. Praesent ac massa at ligula laoreet iaculis. Praesent ac
            massa at ligula laoreet iaculis. sollicitudin, ipsum eu pulvinar
            rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit
            amet eros. Nullam quis ante. Curabitur vestibulum.
          </p>
        </div>
        <GalleryCard Data={Data} />
      </section>

      <section className="flex flex-col gap-12">
        <div className="flex flex-col gap-7 md:gap-10">
          <div>
            <span className="text-2xl md:text-4xl lg:text-5xl font-thin text-gray-600 border-b-2 pb-2 border-gray-700">
              Our last Meetup in 2024
            </span>
          </div>
          <p className="text-gray-700 lg:text-lg">
            Etiam vitae tortor. Curabitur nisi. In hac habitasse platea
            dictumst. Praesent ac massa at ligula laoreet iaculis. Praesent ac
            massa at ligula laoreet iaculis. sollicitudin, ipsum eu pulvinar
            rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit
            amet eros. Nullam quis ante. Curabitur vestibulum.
          </p>
        </div>
        <GalleryCard Data={Data} />
      </section>

      <section className="flex flex-col gap-12">
        <div className="flex flex-col gap-7 md:gap-10">
          <div>
            <span className="text-2xl md:text-4xl lg:text-5xl font-thin text-gray-600 border-b-2 pb-2 border-gray-700">
              Our last Meetup in 2023
            </span>
          </div>
          <p className="text-gray-700 lg:text-lg">
            Etiam vitae tortor. Curabitur nisi. In hac habitasse platea
            dictumst. Praesent ac massa at ligula laoreet iaculis. Praesent ac
            massa at ligula laoreet iaculis. sollicitudin, ipsum eu pulvinar
            rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit
            amet eros. Nullam quis ante. Curabitur vestibulum.
          </p>
        </div>
        <GalleryCard Data={Data} />
      </section>
    </main>
  );
}
