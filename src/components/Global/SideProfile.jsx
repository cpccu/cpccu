import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function SideProfile() {
  const [isOpen, setOpen] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <section className="fixed top-52 right-0 z-40 flex items-center justify-center group">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="bg-headerHover/20 group-hover:bg-headerHover trans flex items-center justify-center h-8 w-8"
      >
        <FontAwesomeIcon
          className={`text-white/60 group-hover:text-white text-2xl ${
            isOpen && "rotate-180"
          } trans`}
          icon={faAngleDoubleLeft}
        />
      </button>

      <main
        className={`${
          isOpen ? "flex" : "hidden"
        }  h-20 bg-white items-center justify-center gap-3 px-5 shadow-custom`}
      >
        <img
          className="h-12 w-12 ring rounded-full"
          src="https://i.ibb.co/QrxNkCw/nipon.png"
          alt="fsd"
        />
        <h1 className="font-semibold text-lg">Rahul Roy Nipon</h1>
      </main>
    </section>
  );
}
