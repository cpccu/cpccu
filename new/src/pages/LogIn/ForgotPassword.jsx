import Modal from "../../components/Modal";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import { RxQuestionMark } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import useResetLink from "./../../hooks/useResetLink";

export default function ForgotPassword({ isOpen, setOpen }) {
  const {
    email,
    setEmail,
    handleSubmit,
    isLoading,
    isPending,
    isError,
    isSuccess,
    errorMessage,
    successMessage,
    resetState,
  } = useResetLink();

  const [notify, setNotify] = useState(false);

  const closeHandler = () => {
    resetState();
    setOpen(false);
  };

  useEffect(() => {
    if (isError || isSuccess) {
      setNotify(true);
    }
  }, [isError, isSuccess]);

  useEffect(() => {
    if (!isOpen) {
      setNotify(false);
      resetState(); // Reset state if modal closes unexpectedly
    }
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={closeHandler} Zindex="z-30">
      <motion.form
        layout
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 max-w-md mx-auto"
      >
        <main>
          <div className="text-center flex flex-col items-center justify-center gap-2 my-5">
            <div className="bg-login rounded-full p-2 text-white">
              <RxQuestionMark size={25} />
            </div>
            <h2 className="font-semibold text-3xl opacity-70">
              Forgot password?
            </h2>
            <p className="text-center">
              <span className="opacity-60">No worries, we'll send you </span>
              <span className="font-semibold opacity-75">
                reset instructions
              </span>
            </p>
          </div>
          <InputField
            id="email"
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            disabled={isPending || isLoading}
          />
        </main>

        <hr />

        <div className="flex items-center justify-center gap-3">
          <Button onClick={closeHandler} clName="input w-full font-semibold">
            Cancel
          </Button>
          <Button
            type="submit"
            clName="input bg-login hover:bg-login/95 text-white font-semibold shrink-0 w-1/2"
            disabled={isLoading || isPending}
          >
            {isPending ? "Sending..." : "Send link"}
          </Button>
        </div>

        <AnimatePresence>
          {notify && (
            <motion.div
              className="text-center mt-4 transition-all duration-300"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
            >
              {isError && (
                <motion.div
                  className="text-red-500 bg-red-100 border border-red-400 p-3 rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <p>{errorMessage}</p>
                </motion.div>
              )}
              {isSuccess && (
                <motion.div
                  className="text-green-600 bg-green-100 border border-green-400 p-3 rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <p>{successMessage}</p>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.form>
    </Modal>
  );
}
