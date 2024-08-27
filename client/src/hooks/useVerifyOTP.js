import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { apiPost } from "../utils/apiAxios.util";
import { useErrorContext } from "../Context/Error.context";

export const useVerifyOTP = () => {
  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState("");
  const { addError } = useErrorContext();

  const mutation = useMutation({
    mutationFn: async ({ email, otp }) => {
      return apiPost("/api/auth/verify-registration", { email, otp });
    },
    onSuccess: (data) => {
      // Handle success logic here, e.g., redirect or show a success message
      console.log("OTP verified successfully:", data);
    },
    onError: (error) => {
      // Ensure error handling is user-friendly and displays appropriate messages
      addError(error.message || "An error occurred during OTP verification.");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !otp) return; // Check if email or OTP is empty

    // Trigger the mutation to verify OTP
    mutation.mutate({ email, otp });
  };

  return {
    email,
    otp,
    setOTP,
    setEmail,
    handleSubmit,
    isLoading: mutation.isLoading,
    isPending: mutation.isPending,
    isSuccess: mutation.isSuccess,
  };
};
