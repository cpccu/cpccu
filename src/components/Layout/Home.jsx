import OurMissionScrollProvider from "../../Context/OurMessionScroll/OurMessonScrollProvider";
import HeroSection from "../HOME/HeroSection";
import EventLayout from "./../HOME/eventUpcoming/EventLayout";
import OurMission from "./../HOME/OurMission";
import OurResponsibility from "../HOME/OurResponsibility";
import Count from "../HOME/Count";
import GallerySection from "../HOME/GallerySection";

export default function Home() {
  return (
    <OurMissionScrollProvider>
      <HeroSection />
      <section className="mt-16 lg:mt-0 lg:h-48 h-full relative bg-white">
        <EventLayout
          clName={
            " mx-2 my-14 md:mx-4 md:my-16 lg:mt-0 lg:absolute lg:left-[2rem] lg:right-[2rem]  lg:-top-[11rem] xl:left-[9rem] xl:right-[9rem] xl:-top-[11rem]"
          }
        />
      </section>
      <OurMission />
      <OurResponsibility />
      <Count />
      <GallerySection />
    </OurMissionScrollProvider>
  );
}
