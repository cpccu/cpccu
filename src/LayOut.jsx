import { Outlet } from "react-router-dom";
import Header from "./components/Global/Header.jsx";
import NavBar from "./components/Global/NavBar";
import Footer from "./components/Global/Footer";
import GoToTop from "./components/Global/GoToTop";

export default function LayOut() {
  return (
    <>
      <Header />
      <NavBar />
      <Outlet />
      <Footer />
      <GoToTop />
    </>
  );
}
