import React from "react";
import GoogleLogo from "./../../assets/img/Google.png";
import { motion } from "framer-motion";
import useGoogleSignUp from "../../hooks/useGoggleSignUp";

export default function GoogleSignUp() {
  const { signUpHandler } = useGoogleSignUp();

  return (
    <motion.button
      whileTap={{ scale: 0.99 }}
      onClick={signUpHandler}
      className="flex gap-2 items-center justify-center ring-1 ring-black/20  bg-white shadow-custom p-2 rounded"
    >
      <div>
        <img className="h-6" src={GoogleLogo} alt="" />
      </div>
      <div className="font-semibold text-gray-600">Sign up with Google</div>
    </motion.button>
  );
}
