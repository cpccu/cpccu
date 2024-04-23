import { Outlet } from "react-router-dom";
import Footer from "../global/footer";
import NavBar from "../global/nav";

export default function Layout() {
  return (
    <main className="md:px-10 lg:px-28 overflow-x-hidden flex flex-col h-screen">
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  );
}
