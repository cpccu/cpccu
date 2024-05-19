import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import cn from "../../../lib/cn.js";

const UpComingEventCard = ({ data, clName }) => {
  return (
    <main
      className={cn(
        "grid lg:grid-cols-7 gap-7 lg:gap-5 cursor-default overflow-hidden",
        clName
      )}
    >
      <section className="lg:col-span-3 md:h-[22rem]  lg:h-[38rem] overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src={data?.img}
          alt={data?.alt}
        />

        <div className="h-[4%] bg-black/50"></div>
      </section>
      <section className="h-full lg:col-span-4 flex flex-col items-start gap-4">
        <TimeBox date={data?.date} />
        <h1 className="text-2xl font-semibold lg:line-clamp-1">
          {data?.eventHeadLine1}
        </h1>
        <p className="font-[450] lg:line-clamp-3">{data?.textContext}</p>
        
        {/* price */}
        <h1 className="text-2xl font-semibold lg:line-clamp-1">
          {data?.eventHeadLine2}
        </h1>
        <p className="font-[450] lg:line-clamp-3">{data?.prices}</p>

        <h1 className="text-2xl font-semibold lg:line-clamp-1">
          {data?.eventHeadLine3}
        </h1>
        <p className="font-[450] lg:line-clamp-3">{" -> "}{data?.rules1}</p>
        <p className="font-[450] lg:line-clamp-3">{" -> "}{data?.rules2}</p>
        <p className="font-[450] lg:line-clamp-3">{" -> "}{data?.rules3}</p>
        <p className="font-[450] lg:line-clamp-3">{" -> "}{data?.rules4}</p>

        {data?.btnLink ? (
          <Link to={data?.btnLink} target="_blank" rel="noopener noreferrer">
            <button
              className="bg-black/30 text-white font-bold uppercase px-5 py-2 
          hover:text-gray-600 hover:bg-white border-[3px] border-white trans"
            >
              {data?.btnText}
            </button>
          </Link>
        ) : null}
      </section>
    </main>
  );
};

export default UpComingEventCard;

function TimeBox({ date }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(date) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <main className="flex gap-5">
      <section className="flex flex-col items-center font-bold gap-1">
        <div>Days</div>
        <div className="border text-center px-3 py-1 font-bold text-xl bg-black/70 trans">
          {days || "00"}
        </div>
      </section>

      <section className="flex flex-col items-center font-bold gap-1">
        <div>Hr</div>
        <div className="border text-center px-3 py-1 font-bold text-xl bg-black/70">
          {hours || "00"}
        </div>
      </section>

      <section className="flex flex-col items-center font-bold gap-1">
        <div>Min</div>
        <div className="border text-center px-3 py-1 font-bold text-xl bg-black/70">
          {minutes || "00"}
        </div>
      </section>

      <section className="flex flex-col items-center font-bold gap-1">
        <div>Sec</div>
        <div className="border text-center px-3 py-1 font-bold text-xl bg-black/70">
          {seconds || "00"}
        </div>
      </section>

      <p className="self-end font-bold text-xl hidden lg:block">Remaining</p>
    </main>
  );
}
