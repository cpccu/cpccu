import { motion } from "framer-motion";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/LogIn/Login";
import SignUp from "./pages/SignUp/SignUp";
import RenewPass from "./pages/RenewPass/RenewPass";
import { AnimatePresence } from "framer-motion";
import { useNetworkConnection } from "./Context/Network.context";
import { useEffect } from "react";
import { useErrorContext } from "./Context/Error.context";
import Dashborad from "./pages/Dashboard/Dashboard";
import ProtectedRoute from "./components/Protected";

export default function Render() {
  const { isConnected } = useNetworkConnection();
  const { addError } = useErrorContext();

  useEffect(() => {
    if (!isConnected) {
      addError("No internet connection. Please check your network settings.");
    }
  }, [isConnected]);
  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <Routes>
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

          <Route
            path="/profile"
            element={
              <RouteTransition>
                <ProtectedRoute element={<Dashborad />} />
              </RouteTransition>
            }
          />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export function RouteTransition({ children }) {
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
