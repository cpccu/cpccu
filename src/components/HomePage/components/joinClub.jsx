export default function JoinClub() {
  const joinData = [
    {
      num: "01",
      header: "Contact a member of Club",
      detail: "Here is where you can contact a member of our programming club",
    },
    {
      num: "02",
      header: "Contact a member of Club",
      detail: "Here is where you can contact a member of our programming club",
    },
    {
      num: "03",
      header: "Contact a member of Club",
      detail: "Here is where you can contact a member of our programming club",
    },
  ];

  return (
    <>
      <section
        className="grid gap-8 md:grid-cols-2 mt-16 py-10 px-5 md:px-9
      mx-4 md:mx-2  bg-black/10 rounded-lg"
      >
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-3xl md:text-4xl font-bold text-black/80">
            How to Join?
          </h3>
          <p className="text-black/60 md:mt-2">
            We have a few steps to you get started
          </p>
        </div>
        <div>
          <ul className="flex flex-col gap-y-5">
            {joinData.map((item, index) => (
              <li
                key={index}
                className="flex gap-4 items-center justify-center text-black/70"
              >
                <div className="bulet shrink-0">{item.num}</div>
                <section>
                  <h4 className="font-bold text-lg">{item.header}</h4>
                  <p className="text-sm">{item.detail}</p>
                </section>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
