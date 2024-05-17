import { useNavigate } from "react-router-dom";
import IMG404 from "./../assets/img/404.jpg";

export default function NotFound() {
  const navigate = useNavigate();

  const GoToHome = () => {
    navigate("/");
  };

  return (
    <section className="flex items-center justify-center">
      <main className="flex flex-col items-center justify-center h-screen py-32">
        <img className="max-h-full" src={IMG404} alt="404" />
        <button
          onClick={GoToHome}
          className="border px-3 py-2 mt-4 font-semibold bg-headerHover hover:bg-header trans text-white"
        >
          Go Home
        </button>
      </main>
    </section>
  );
}
