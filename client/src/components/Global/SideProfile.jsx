import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Data from "./../../../data/LogInfo.json";
import { useAuthContext } from "../../Context/Auth.context";

export default function SideProfile() {
  const [isOpen, setOpen] = useState(true);
  const [show, setShow] = useState(true);
  const { logStatus, user } = useAuthContext();

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const path = `/profile/${user?._id}`;

  const goProfile = useCallback(() => {
    navigate(path);
  }, [navigate, path]);

  useEffect(() => {
    if (path === pathname) {
      setShow(false);
    } else if (!show) {
      setShow(true);
    }
  }, [pathname, path, show]);

  return logStatus ? (
    show ? (
      <section className="fixed top-52 right-0 z-40 flex items-center justify-center group">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="bg-headerHover/20 group-hover:bg-headerHover trans flex items-center justify-center h-8 w-8"
        >
          <FontAwesomeIcon
            className={`text-white/60 group-hover:text-white text-2xl trans ${
              isOpen ? "rotate-180" : ""
            }`}
            icon={faAngleDoubleLeft}
          />
        </button>

        <main
          className={`${
            isOpen ? "flex" : "hidden"
          } h-20 bg-white items-center justify-center gap-3 px-5 shadow-custom`}
        >
          {user?.avatar && user?.avatar !== "" ? (
            <img
              onClick={goProfile}
              src={user?.avatar}
              className="h-12 w-12 ring ring-headerHover/50 hover:ring-headerHover/80 trans rounded-full cursor-pointer"
              alt="profile-image"
            />
          ) : (
            <div
              onClick={goProfile}
              className="h-12 w-12 ring ring-headerHover/50 group-hover:ring-headerHover/80 trans rounded-full cursor-pointer flex justify-center items-center"
            >
              <span className="text-2xl font-bold text-header/70 group-hover:text-header/90 trans">
                {user?.fullname[0]}
              </span>
            </div>
          )}
          <h1
            onClick={goProfile}
            className="font-semibold text-lg cursor-pointer"
          >
            {user?.fullname}
          </h1>
        </main>
      </section>
    ) : null
  ) : null;
}
