import { useParams, Link } from "react-router-dom";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoIosCall } from "react-icons/io";
import { useEffect, useState } from "react";

export default function Profile({ details }) {
  const [Data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setData(details);
  });

  return (
    <main className="grid md:grid-cols-12 gap-10 padding py-20">
      {/* layout for image start */}
      <section className="md:col-span-4">
        <img
          className="h-full w-full object-cover"
          src={Data?.img}
          alt={Data?.name}
        />
      </section>
      {/* layout for image end */}
      <section className="md:col-span-8">
        <header className="flex flex-col gap-4">
          <div>
            <h1 className="text-3xl font-bold text-pText">{Data?.name}</h1>
            <p className="text-lg font-semibold text-black/60">
              {Data?.position}
            </p>
          </div>

          <div className="opacity-70">
            {Data?.email ? (
              <Link
                to={`mailto:${Data?.email}`}
                className="flex items-center gap-3 text-lg"
              >
                <HiOutlineMailOpen size={20} />
                <span>{Data?.email}</span>
              </Link>
            ) : null}

            {Data?.phone ? (
              <Link
                to={`tel:${Data?.phone}`}
                className="flex items-center gap-3 text-lg"
              >
                <IoIosCall size={20} />
                <span>{Data?.phone}</span>
              </Link>
            ) : null}
          </div>
        </header>
      </section>
    </main>
  );
}
