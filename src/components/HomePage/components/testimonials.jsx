import arrowIcon from "/src/assets/icons/arrow.svg";
import Card from "./card";
import { useCallback, useEffect, useRef, useState } from "react";

export default function Testimonials() {
  const cardBody = useRef(null);
  const loading = new Array(5).fill(0);

  const [allTestimonials, setTestimonials] = useState(0);

  const leftArrow = () => {
    cardBody.current.scrollLeft -= 327.5;
  };
  const rightArrow = () => {
    cardBody.current.scrollLeft += 327.5;
  };

  const getData = useCallback(() => {
    const url =
      "https://script.google.com/macros/s/AKfycbyWxBmkFmitj9t0vXIgIP0o1Az_1GvreNr6zMnYj8VwSlY5LrEne-f71ga90zZOFQ5x/exec";

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((res) => {
        console.log("Data fetched successfully:", res);
        setTestimonials(res);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      }, []);
  });

  useEffect(() => {
    getData();
  }, []);

  return (
    <main className="relative mt-10 md:mt-20">
      {allTestimonials ? (
        <h1 className="text-center text-2xl md:text-3xl font-bold text-black/80">
          Testimonials
        </h1>
      ) : (
        <div className="loading h-10 w-40 rounded-full mx-auto"></div>
      )}
      <section className="mt-5 md:mt-6">
        {/* append all the card */}
        <div
          ref={cardBody}
          className="cardBody overflow-auto mx-6 md:mx-8 px-7 md:py-12 pt-12 pb-2 flex gap-10 scroll-smooth"
        >
          {allTestimonials
            ? allTestimonials.map((item, index) => (
                <Card key={index} item={item} />
              ))
            : loading.map((item, index) => <Card key={index} />)}
        </div>
        {/* slider arrow start */}
        <button
          onClick={leftArrow}
          className={`${
            !allTestimonials && "loading"
          }  absolute rounded-full left-3 md:left-0 top-[57%] md:top-[50%]
          flex items-center justify-center bg-black/20
          hover:ring-2 ring-primary/50 transition-all duration-300`}
        >
          <img className="h-9 md:h-12" src={arrowIcon} alt="left arrow" />
        </button>

        <button
          onClick={rightArrow}
          className={`${
            !allTestimonials && "loading"
          } absolute rounded-full right-3 md:right-0 top-[57%] md:top-[50%]
        flex items-center justify-center bg-black/20
        hover:ring-2 ring-primary/50 transition-all duration-300`}
        >
          <img
            className="h-9 md:h-12 rotate-180"
            src={arrowIcon}
            alt="right arrow"
          />
        </button>
        {/* slider arrow end */}
      </section>
    </main>
  );
}
