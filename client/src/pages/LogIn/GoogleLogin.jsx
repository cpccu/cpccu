import React from "react";
import useGoogleLogin from "../../hooks/useGoogleLogin";
import GoogleLogo from "./../../assets/img/Google.png";
import { motion } from "framer-motion";

export default function GoogleLogin() {
  const { loginHandler } = useGoogleLogin();

  return (
    <motion.button
      whileTap={{ scale: 0.99 }}
      onClick={loginHandler}
      className="flex gap-2 items-center justify-center ring-1 ring-black/20  bg-white shadow-custom p-2 rounded"
    >
      <div>
        <img className="h-6" src={GoogleLogo} alt="" />
      </div>
      <div className="font-semibold text-gray-600">Login with Google</div>
    </motion.button>
  );
}
