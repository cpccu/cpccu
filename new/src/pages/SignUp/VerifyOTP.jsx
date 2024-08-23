import Modal from "../../components/Modal";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import { RxQuestionMark } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import useResetLink from "./../../hooks/useResetLink";
import { useVerifyOTP } from "../../hooks/useVerifyOTP";
import SuccessRegi from "./SuccessRegi";

export default function VerifyOTP({ isOpen, setOpen, mail }) {
  const {
    email,
    otp,
    setOTP,
    setEmail,
    handleSubmit,
    isLoading,
    isPending,
    isSuccess,
  } = useVerifyOTP();

  const closeHandler = () => {
    setOTP("");
    setOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      setEmail(mail);
    }
  }, [isOpen]);

  return (
    <div>
      {isSuccess && <SuccessRegi isSuccess={isSuccess} />}
      <Modal isOpen={isOpen} onClose={closeHandler} Zindex="z-30">
        <motion.form
          layout
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 max-w-md mx-auto"
        >
          <main>
            <div className="text-center flex flex-col items-center justify-center gap-2 my-5">
              <h2 className="font-semibold text-3xl opacity-70">
                OTP Verification
              </h2>
            </div>
            <InputField
              id="otp"
              type="text"
              value={otp}
              required
              onChange={(e) => setOTP(e.target.value)}
              placeholder="Enter your otp"
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
              {isPending || isLoading ? "Verifying..." : "Verify"}
            </Button>
          </div>
        </motion.form>
      </Modal>
    </div>
  );
}
