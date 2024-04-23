import { useCallback, useEffect, useState } from "react";

export default function Event() {
  const [data, setData] = useState(null);

  const getData = useCallback(() => {
    const url =
      "https://script.google.com/macros/s/AKfycbxsehU3_tkbeSxcvo7BBcbFgzx8xLsK_vQMN2iPeaNSagI7aiDbZrgksRDdsOkP5IJxjQ/exec";

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
      });
  }, []);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {data ? (
        <main>
          <h1 className="text-center text-2xl md:text-3xl font-bold my-5 mt-9 md:my-10 md:mt-20">
            Upcoming Events
          </h1>
          <section className="bg-[#F0F4F7] shadow-md grid md:grid-cols-2 items-center justify-center mx-3 rounded-xl overflow-hidden">
            <img
              className="h-full w-full object-fill"
              src={data[0].img}
              alt="event img"
            />
            <section className="flex flex-col px-10 py-9">
              <h1 className="text-2xl font-bold text-primary">
                {data[0].name}
              </h1>
              <p className="text-sm leading-tight my-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries
              </p>
              <button className="btn font-custom text-lg text-white self-start">
                Apply Now
              </button>
              <div className="flex flex-col mt-6 text-sm font-semibold">
                <p>
                  Contest Deadline:{" "}
                  <span className="text-primary">{data[0].contest}</span>
                </p>
                <p>
                  Registration Deadline:{" "}
                  <span className="text-primary">27 July 2024</span>
                </p>
              </div>
            </section>
          </section>
          <footer className="flex justify-between items-center my-12 mx-3 bg-primary rounded-xl px-8 py-4">
            <h3 className="md:text-2xl lg:text-3xl font-bold text-white">
              Ready To Build Your Community?
            </h3>
            <button className="px-5 shrink-0 py-2 rounded-full text-white bg-gray-900 hover:bg-gray-800 transition-all duration-500 hover:ring-2 ring-gray-400/50">
              Get Started
            </button>
          </footer>
        </main>
      ) : (
        <div></div>
      )}
    </>
  );
}
