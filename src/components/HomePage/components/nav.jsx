import Logo from "/src/assets/Logo/cpccu.png";
import NavIcon from "/src/assets/icons/menu.svg";
import CloseIcon from "/src/assets/icons/close.svg";
import { useEffect, useRef, useState } from "react";

export default function NavBar() {
  const navbar = useRef(null);
  const toggler = useRef(null);
  const [navClose, setNavOpen] = useState({ open: false, icon: NavIcon });

  const navBarHandler = () => {
    setNavOpen((prev) => ({
      open: !prev.open,
      icon: prev.open ? NavIcon : CloseIcon,
    }));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navbar.current &&
        !navbar.current.contains(event.target) &&
        !toggler.current.contains(event.target)
      ) {
        setNavOpen({ open: false, icon: NavIcon });
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="px-8 md:mt-8 sticky top-0 z-50 h-28 w-full bg-header flex items-center justify-between py-3 text-white shadow-md shadow-black/90">
      <div className="flex items-center justify-center gap-2 cursor-pointer">
        <img className="h-9" src={Logo} alt="CPCCU" />
        <h1 className="text-2xl font-custom">CPCCU</h1>
      </div>
      <ul
        ref={navbar}
        className={` ${navClose.open ? "right-0" : "-right-[60%]"}
         transition-all duration-500  absolute h-screen w-[60%] bg-header/70 top-0 bottom-0 
        md:bg-transparent md:h-full flex flex-col justify-center items-center
       md:static md:flex-row md:justify-center md:items-center gap-5 text-white`}
      >
        <li>Home</li>
        <li>Gallery</li>
        <li>About us</li>
        <li>Contact</li>
      </ul>

      <button className="hidden md:block btn font-semibold  top-6">
        Get Started
      </button>

      <button ref={toggler} onClick={navBarHandler} className="md:hidden">
        <img className="h-7" src={navClose.icon} alt="Navbar" />
      </button>
    </nav>
  );
}
