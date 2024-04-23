import Logo from "/src/assets/Logo/cpccu.png";
import NavIcon from "/src/assets/icons/menu.svg";
import CloseIcon from "/src/assets/icons/close.svg";
import { useEffect, useRef, useState } from "react";

export default function NavBar() {
  const navbar = useRef(null);
  const toggler = useRef(null);
  const navPosition = useRef(null);
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
    <nav
      ref={navPosition}
      className="z-50 bg-header md:rounded-xl text-white px-8 py-2 flex items-center justify-between 
      fixed top-0 left-0 right-0 md:sticky"
    >
      <div className="flex items-center justify-center gap-2 cursor-pointer">
        <img className="h-9" src={Logo} alt="CPCCU" />
        <h1 className="text-2xl font-custom">CPCCU</h1>
      </div>
      <ul
        ref={navbar}
        className={`nav ${navClose.open ? "left-0" : "-left-[290px]"}`}
      >
        <li className="nav-item">Home</li>
        <li className="nav-item">About Us</li>
        <li className="nav-item">Contact</li>
        <li className="nav-item">Home</li>
        <button className="btn font-semibold md:hidden top-6">
          Get Started
        </button>
      </ul>
      <button className="btn font-semibold hidden top-6 md:block">
        Get Started
      </button>
      <button
        ref={toggler}
        onClick={navBarHandler}
        className="hover:scale-95 transition-all duration-300 md:hidden"
      >
        <img className="h-7" src={navClose.icon} alt="Navbar" />
      </button>
    </nav>
  );
}