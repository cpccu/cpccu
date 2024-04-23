import Hero from "./components/hero";
import JoinClub from "./components/joinClub";
import NavBar from "./components/nav";
import OurGallery from "./components/ourGallery";
import Testimonials from "./components/testimonials";
import Event from "./components/event";
import Footer from "./components/footer";
import { useState } from "react";

export default function Home() {
  return (
    <section className="lg:px-28 md:px-12 md:pt-8 overflow-x-hidden flex flex-col">
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
