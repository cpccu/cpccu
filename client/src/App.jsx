import { motion } from "framer-motion";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/LogIn/Login";
import SignUp from "./pages/SignUp/SignUp";
import RenewPass from "./pages/RenewPass/RenewPass";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Dashborad from "./pages/Dashboard/Dashboard";
import ProtectedRoute from "./components/Protected";
import Layout from "./LayOut";
import Home from "./components/Layout/Home";
import Event from "./components/Layout/Event";
import ComingSoon from "./components/ComingSoon";
import Gallery from "./components/Layout/Gallery";
import AboutLayout from "./AboutLayout";
import Contact from "./components/Layout/Contact";
import Blog from "./components/Layout/Blog";
import Committee from "./components/Layout/AboutLayout/Committee";
import Alumni from "./components/Layout/AboutLayout/Alumni";
import Member from "./components/Layout/AboutLayout/Member";
import NotFound from "./components/NotFound";
import { useNetworkConnection } from "./Context/Network.context";
import { useErrorContext } from "./Context/Error.context";
import { useAuthContext } from "./Context/Auth.context";
import Spinner from "./components/Spinner";

export default function App() {
  const { isConnected } = useNetworkConnection();
  const { addError } = useErrorContext();
  const { isLoading, isPending } = useAuthContext();

  useEffect(() => {
    if (!isConnected) {
      addError("No internet connection. Please check your network settings.");
    }
  }, [isConnected]);

  if (isLoading || isPending) {
    return <Spinner />;
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnimatePresence mode="wait">
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
          <Route path="*" element={<NotFound />} />
          <Route
            path="/login"
            element={
              <RouteTransition>
                <Login />
              </RouteTransition>
            }
          />
          <Route
            path="/signup"
            element={
              <RouteTransition>
                <SignUp />
              </RouteTransition>
            }
          />
          <Route
            path="/reset-password/:code/:token"
            element={
              <RouteTransition>
                <RenewPass />
              </RouteTransition>
            }
          />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

function RouteTransition({ children }) {
  const location = useLocation();

  const variants = {
    initial: {
      opacity: 0,
      scale: 0.8,
    },
    animate: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.8, 0.25, 1],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.8, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      key={location.pathname}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  );
}
function ScrollToTop() {
  const loc = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [loc.pathname]);

  return null;
}
