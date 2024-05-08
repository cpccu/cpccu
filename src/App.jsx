import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import LayOut from "./LayOut";
import Home from "./components/Layout/Home";
import Event from "./components/Layout/Event";
import ComingSoon from "./components/ComingSoon";
import { useEffect } from "react";
import Gallery from "./components/Layout/Gallery";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
          <Route path="event" element={<Event />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="about" element={<ComingSoon />} />
          <Route path="contact" element={<ComingSoon />} />
        </Route>
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
