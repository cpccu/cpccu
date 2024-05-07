import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/HomePage/Home";
import Layout from "./components/layout/layout";
import Contact from "./components/ContactPage/contact";
import OurGallery from "./components/HomePage/components/ourGallery";
import aboutUs from "./components/HomePage/components/aboutUs";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />}></Route>
            <Route path="gallery" element={<OurGallery />}></Route>
            <Route path="about" element={<aboutUs />}></Route> 
            {/* not working this about us page */}
            <Route path="contact" element={<Contact />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
