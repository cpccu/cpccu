import React from "react";
import AboutCard from "./AboutCard";

export default function AboutPage({ Data }) {
  return (
    <main className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-3 xl:gap-10 padding py-16 bg-responsibility">
      {Data && Data.length > 0 ? (
        Data.map((item) => <AboutCard key={item._id} Data={item} />)
      ) : (
        <p>No members found.</p>
      )}
    </main>
  );
}
