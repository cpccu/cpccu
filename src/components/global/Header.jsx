import { Link } from "react-router-dom";
import InstitudeInfo from "../../../data/global/institude.json";

export default function Header() {
  return (
    <header
      className={` bg-blue-950 hidden md:flex text-white justify-between items-center padding`}
    >
      <div className="flex gap-5 font-semibold text-sm">
        <p>
          <Link to={`mailto:${InstitudeInfo?.email}`}>
            Email: {InstitudeInfo?.email}
          </Link>
        </p>
        <p>
          <Link to={`tel:${InstitudeInfo?.phone}`}>
            Hotline: {InstitudeInfo?.phone}
          </Link>
        </p>
      </div>
      <div className="flex gap-3 items-center font-semibold text-sm">
        <button className="py-2 px-5 bg-header/90 hover:bg-header trans">
          Login
        </button>
        <button className="py-2 px-5 bg-green-600 hover:bg-green-500 trans">
          Signup
        </button>
      </div>
    </header>
  );
}
