import Hero from "./components/hero";
import JoinClub from "./components/joinClub";
import OurGallery from "./components/ourGallery";
import Testimonials from "./components/testimonials";
import Event from "./components/event";

export default function Home() {
  return (
    <section>
      <Hero />
      <JoinClub />
      <Testimonials />
      <OurGallery />
      <Event />
    </section>
  );
}
