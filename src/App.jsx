import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/HomePage/Home";
import Layout from "./components/layout/layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />}></Route>
            <Route path="gallery" element={""}></Route>
            <Route path="about" element={""}></Route>
            <Route path="contact" element={""}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
