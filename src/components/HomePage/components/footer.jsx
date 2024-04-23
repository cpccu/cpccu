import Logo from "/src/assets/Logo/cpccu.png";
import FaceIcon from "/src/assets/icons/facebook.svg";
import WhatIcon from "/src/assets/icons/whatsapp.svg";
import LinkIcon from "/src/assets/icons/linkedin.svg";
import CallIcon from "/src/assets/icons/call.svg";

export default function Footer() {
  return (
    <main
      className="bg-footer mx-3 px-10 pt-10 rounded-t-xl text-white grid 
    grid-cols-2 md:grid-cols-5 items-center justify-center gap-2 md:gap-0"
    >
      <div className="col-span-2 md:col-span-1 flex items-center justify-center mb-5 md:mb-0">
        <img src={Logo} alt="logo" />
      </div>

      <ul className="flex flex-col items-center justify-center gap-2">
        <li>Home</li>
        <li>Roadmaps</li>
        <li>Community</li>
        <li>Careers</li>
      </ul>

      <ul className="flex flex-col items-center justify-center gap-2">
        <li>About Us</li>
        <li>Contact</li>
        <li>Privacy Policy</li>
        <li>FAQ</li>
      </ul>

      <div className="col-span-2 md:col-span-2 flex justify-center items-center gap-2 my-3 mt-5 md:mt-0">
        <input
          className="px-5 py-2 rounded-full"
          type="text"
          placeholder="Search"
        />
        <button className="btn">Go</button>
      </div>

      <hr className="col-span-2 md:col-span-5 md:mt-8"></hr>

      <section className="col-span-2 md:col-span-5 flex justify-between items-center my-1 md:my-3 gap-10 text-sm md:text-md">
        <p>
          Copyright © 2022 CPCCU ||{" "}
          <span className="font-semibold">City University Bangladesh</span>
        </p>
        <div className="flex items-center justify-center gap-3">
          <img className="h-6" src={FaceIcon} alt="facebook" />
          <img className="h-6" src={WhatIcon} alt="whatsapp" />
          <img className="h-6" src={LinkIcon} alt="linkden" />
          <img className="h-5" src={CallIcon} alt="call" />
        </div>
      </section>
    </main>
  );
}
