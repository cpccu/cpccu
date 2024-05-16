import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Layout from "./LayOut";
import Home from "./components/Layout/Home";
import Event from "./components/Layout/Event";
import ComingSoon from "./components/ComingSoon";
import { useEffect, useState } from "react";
import Gallery from "./components/Layout/Gallery";
import AboutLayout from "./AboutLayout";
import Contact from "./components/Layout/Contact";
import Blog from "./components/Layout/Blog";
import Committee from "./components/Layout/AboutLayout/Committee";
import Profile from "./components/Layout/Profile";
import NotFound from "./components/NotFound";

export default function App() {
  const [ID, setID] = useState("nipon");

  const setIDname = (newID) => {
    setID(newID);
  };
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/" element={<AboutLayout />}>
            <Route path="history" element={<ComingSoon />} />
            <Route
              path="committee"
              element={<Committee setIDname={setIDname} />}
            />
            <Route path="member" element={<ComingSoon />} />
          </Route>
          <Route path="event" element={<Event />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path={`profile/${ID || ""}`} element={<Profile ID={ID} />} />
          <Route path="profile/:id" element={<Profile />} />
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export function ScrollToTop() {
  const loc = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [loc.pathname]);

  return null;
}
