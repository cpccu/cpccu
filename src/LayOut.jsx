import { Outlet } from "react-router-dom";
// import Header from "./components/Global/Header";
// import Header from "./components/Global/Header";
import NavBar from "./components/Global/NavBar";
import Footer from "./components/Global/Footer";
import GoToTop from "./components/Global/GoToTop";

export default function Layout() {
  return (
    <>
      {/* <Header /> */}
      <NavBar />
      <Outlet />
      <Footer />
      <GoToTop />
    </>
  );
}
