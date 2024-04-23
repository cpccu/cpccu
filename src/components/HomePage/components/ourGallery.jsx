import { useState, useCallback, useEffect } from "react";

export default function OurGallery() {
  const [Data, setData] = useState(null);

  const getData = useCallback(() => {
    const url =
      "https://script.google.com/macros/s/AKfycbxhd5Hl_nHaHm5I6w_4fEicU0Mj0g8kv0ovQ8UuaIcAVbLGzznxPoDuO6INl7EsYyI/exec";
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((res) => {
        console.log("Data fetched successfully:", res);
        setData(res);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      }, []);
  });

  useEffect(() => {
    getData();
  }, []);

  return Data ? (
    <main className=" mx-5 md:mx-3">
      <h1 className="text-center font-bold text-2xl md:text-3xl mt-10 text-black/80">
        Our Gallery
      </h1>
      <section className="max-h-[580px] grid grid-cols-12 grid-rows-7 gap-1 md:gap-3 mt-5 md:mt-12 rounded-lg overflow-hidden">
        <div className="border col-span-2 row-span-3">
          <img
            className="object-cover h-full w-full"
            src={Data[0].img}
            alt={Data[0].src}
          />
        </div>
        <div className="border col-span-4 row-span-3">
          <img
            className="object-cover h-full w-full"
            src={Data[1].img}
            alt={Data[1].src}
          />
        </div>
        <div className="border col-span-6 row-span-4">
          <img
            className="object-cover h-full w-full"
            src={Data[2].img}
            alt={Data[2].src}
          />
        </div>
        <div className="border col-span-4 row-span-4">
          <img
            className="object-cover h-full w-full"
            src={Data[3].img}
            alt={Data[3].src}
          />
        </div>
        <div className="border col-span-2 row-span-2">
          <img
            className="object-cover h-full w-full"
            src={Data[4].img}
            alt={Data[4].src}
          />
        </div>
        <div className="border col-span-6 row-span-3">
          <img
            className="object-cover h-full w-full"
            src={Data[5].img}
            alt={Data[5].src}
          />
        </div>
        <div className="border col-span-2 row-span-2">
          <img
            className="object-cover h-full w-full"
            src={Data[6].img}
            alt={Data[6].src}
          />
        </div>
      </section>
    </main>
  ) : (
    <main className=" mx-5 md:mx-3">
      <div className="mx-auto w-40 h-6 md:h-10 rounded-full mt-10 loading "></div>
      <section className="min-h-[230px] md:min-h-[500px] grid grid-cols-12 grid-rows-7 gap-1 md:gap-3 mt-5 md:mt-12 rounded-lg overflow-hidden">
        <div className="border loading h-full w-full col-span-2 row-span-3"></div>
        <div className="border loading h-full w-full col-span-4 row-span-3"></div>
        <div className="border loading h-full w-full col-span-6 row-span-4"></div>
        <div className="border loading h-full w-full col-span-4 row-span-4"></div>
        <div className="border loading h-full w-full col-span-2 row-span-2"></div>
        <div className="border loading h-full w-full col-span-6 row-span-3"></div>
        <div className="border loading h-full w-full col-span-2 row-span-2"></div>
      </section>
    </main>
  );
}
