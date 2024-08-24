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
// import Profile from "./components/Layout/Profile";
import NotFound from "./components/NotFound";
// import Login from "./components/LOGINSIGNUP/Login"; // old
// import Signup from "./components/LOGINSIGNUP/Signup"; // old
import Alumni from "./components/Layout/AboutLayout/Alumni";
import Member from "./components/Layout/AboutLayout/Member";
import Login from "./pages/LogIn/Login"; //new
import SignUp from "./pages/SignUp/SignUp"; //new

//
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Render from "./Route";
import Provider from "./components/Provider";
// Create a QueryClient instance
const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/" element={<AboutLayout />}>
              <Route path="history" element={<ComingSoon />} />
              <Route path="committee" element={<Committee />} />
              <Route path="alumni" element={<Alumni />} />
              <Route path="member" element={<Member />} />
            </Route>
            <Route path="event" element={<Event />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="profile/:id" element={<ComingSoon />} />
          </Route>
          <Route path="" element={<NotFound />}></Route>
          {/* <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} /> */}



        </Routes>

      </BrowserRouter>
      {/* new */}
      <QueryClientProvider client={queryClient}>
        <Provider>
          <Render />
        </Provider>
      </QueryClientProvider>
      {/* new */}
    </>
  );
}

export function ScrollToTop() {
  const loc = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [loc.pathname]);

  return null;
}
