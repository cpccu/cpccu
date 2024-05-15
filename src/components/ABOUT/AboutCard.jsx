import { MdOutlineEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

export default function AboutCard({ Data, setIDname }) {
  const navigate = useNavigate();

  const onClickProfile = (name) => {
    const url = name.replace(/\s/g, "").toLowerCase();
    setIDname(url || "");
    navigate(`/profile/${url || ""}`);
  };

  return (
    <main className="group bg-white flex flex-col items-center justify-center gap-5 py-3">
      <section className="px-3 py-2 h-[300px]">
        <img
          className="h-full w-full object-cover group-hover:scale-105 trans"
          src={Data?.img}
          alt={Data?.name}
        />
      </section>
      <section className="flex flex-col items-center text-center justify-center gap-1">
        <h1 className="text-2xl font-semibold capitalize text-pText">
          {Data?.name}
        </h1>
        <p className={`italic capitalize text-xl ${Data?.type && "font-bold"}`}>
          {Data?.position}
        </p>

        <Link
          to={`mailto:${Data?.email}`}
          className="italic flex items-center justify-center gap-1"
        >
          <MdOutlineEmail size={20} />
          <span>{Data?.email}</span>
        </Link>
        {/* Adjusted onClick function to use a callback */}
        <button
          onClick={() => onClickProfile(Data?.name)} // Pass a callback function
          className="mt-5 px-5 py-3 font-semibold border rounded-full bg-header hover:bg-gray-900 trans text-white"
        >
          View Profile
        </button>
      </section>
    </main>
  );
}
