import Hero from "./components/hero";
import JoinClub from "./components/joinClub";
import NavBar from "./components/nav";
import OurGallery from "./components/ourGallery";
import Testimonials from "./components/testimonials";
import Event from "./components/event";
import Footer from "./components/footer";

export default function Home() {
  return (
    <section className="lg:px-28 overflow-x-hidden flex flex-col h-screen">
      <NavBar />
      <Hero />
      <JoinClub />
      <Testimonials />
      <OurGallery />
      <Event />
      <Footer />
    </section>
  );
}
