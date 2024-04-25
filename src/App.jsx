import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/HomePage/Home";
import Layout from "./components/layout/layout";
import Contact from "./components/ContactPage/contact";
import OurGallery from "./components/HomePage/components/ourGallery";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />}></Route>
            <Route path="gallery" element={<OurGallery></OurGallery>}></Route>
            <Route path="about" element={""}></Route>
            <Route path="contact" element={<Contact />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
