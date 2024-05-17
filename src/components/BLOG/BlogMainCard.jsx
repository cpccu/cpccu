export default function BlogMainCard({ Data }) {
  return (
    <main className="bg-white hover:-translate-y-3 trans">
      <section
        className="overflow-hidden h-[250px] relative flex items-end gap-2"
        style={{
          backgroundImage: `url(${Data?.img}`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex py-3 px-5 bg-black/60 gap-4">
          <img
            className="h-10 rounded shrink-0"
            src={Data?.profile}
            alt="picture"
          />
          <p className="flex flex-col leading-5 shrink-0 text-white font-semibold text-sm">
            {Data?.name} <span className="text-sm font-thin">{Data?.date}</span>{" "}
          </p>
        </div>
      </section>
      <section className="flex flex-col items-start gap-4 p-6">
        <h1 className="text-2xl font-semibold">{Data?.header}</h1>
        <p className=" line-clamp-4">{Data?.conText}</p>
        <button className="px-5 py-2 mt-2 bg-header text-white hover:bg-gray-800 trans">
          {Data?.btnText}
        </button>
      </section>
    </main>
  );
}
