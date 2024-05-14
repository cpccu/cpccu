import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

export default function AboutCard({ Data }) {
  return (
    <main className="group bg-white flex flex-col items-center justify-center gap-5 py-3">
      <section className="px-3 py-2 h-[300px]">
        <img
          className="h-full w-full object-cover group-hover:scale-105 trans"
          src={Data?.img}
          alt={Data?.name}
        />
      </section>
      <section className="flex flex-col items-center justify-center gap-1">
        <h1 className="text-2xl font-semibold capitalize">{Data?.name}</h1>
        <p
          className={`italic capitalize text-xl ${
            Data?.type == 1 && "font-bold"
          }`}
        >
          {Data?.position}
        </p>

        <Link
          to={`mailto:${Data?.email}`}
          className="italic flex items-center justify-center gap-1"
        >
          <MdOutlineEmail size={20} />
          <span>{Data?.email}</span>
        </Link>
        <button className="mt-5 px-5 py-3 font-semibold border rounded-full bg-header hover:bg-gray-900 trans text-white">
          Veiw Profile
        </button>
      </section>
    </main>
  );
}
