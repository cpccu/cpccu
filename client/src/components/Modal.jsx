import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import cn from "../../lib/cn";


const Modal = ({ isOpen, children, onClose, clName, Zindex }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.section
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "fixed inset-0 flex items-center justify-center bg-black/50 z-10 backdrop-blur-sm",
            Zindex
          )}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className={cn(
              "bg-white border border-gray-300 rounded-xl shadow-lg px-8 py-6 max-w-md mx-2",
              clName
            )}
          >
            {children}
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Modal;
