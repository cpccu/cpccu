import { useContext } from "react";
import Hero from "../../../data/home/Hero.json";
import OurMissionScroll from "../../Context/OurMessionScroll/OurMessionScroll";
import { Link as ScrollMission } from "react-scroll";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const { target } = useContext(OurMissionScroll);
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate("/about/history");
  };

  return (
    <main
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${Hero?.bgURL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="padding text-white flex flex-col justify-center items-center md:items-start py-[3rem] gap-11 lg:gap-10 md:pb-[7rem] lg:pb-[16rem] cursor-default h-[calc(100svh-50px)] md:h-full"
    >
      <section className="flex flex-col items-center md:items-start">
        <h1 className="font-extrabold capitalize text-[2.3rem] md:text-[4rem] lg:text-[4.5rem]">
          {Hero?.header}
        </h1>
        <h3 className="text-[1.7rem] text-center md:text-[1.9rem] lg:text-left lg:text-[2rem] text-amber-300">
          {Hero?.secondheader}
        </h3>
      </section>
      <p className="conText text-md text-center md:text-left text-white/75">
        {Hero?.context}
      </p>
      <div className="flex gap-5">
        <ScrollMission
          to={target || ""}
          spy={true}
          smooth={true}
          offset={-60}
          duration={900}
          animate={{ duration: 900, easing: "easeInOutCubic" }}
        >
          <button className="uppercase md:text-[1.2rem] lg:text-[1.3rem] font-semibold px-6 py-3 bg-header hover:bg-white hover:text-black trans">
            {Hero?.btn1Text}
          </button>
        </ScrollMission>

        <button
          onClick={goToAbout}
          className="uppercase md:text-[1.2rem] lg:text-[1.3rem] font-semibold px-6 py-3 bg-white text-black hover:bg-header hover:text-white trans"
        >
          {Hero?.btn2Text}
        </button>
      </div>
    </main>
  );
}
