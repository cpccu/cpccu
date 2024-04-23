import Hero from "./components/hero";
import JoinClub from "./components/joinClub";
import NavBar from "./components/nav";
import OurGallery from "./components/ourGallery";
import Testimonials from "./components/testimonials";
import Event from "./components/event";
import Footer from "./components/footer";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  return (
    <section className="lg:px-28 md:px-12 md:pt-8 overflow-x-hidden scroll-smooth flex flex-col">
      {/* start nav bar */}
      <NavBar />
      {/* end nav bar */}
      <Hero />
      <JoinClub />
      <Testimonials />
      <OurGallery />
      <Event />
      <Footer />
    </section>
  );
}
