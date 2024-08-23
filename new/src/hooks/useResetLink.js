// useResetLink.js
import { useState, useRef, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { apiGetCancel } from "../utils/apiAxios.util"; // Import the utility function
import { useNetworkConnection } from "../Context/Network.context";

const useResetLink = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const { isConnected } = useNetworkConnection();

  const cancelTokenSourceRef = useRef(null);

  const mutation = useMutation({
    mutationFn: async ({ email }) => {
      cancelTokenSourceRef.current = axios.CancelToken.source();
      return await apiGetCancel(
        `/api/auth/reset-link/${email}`,
        cancelTokenSourceRef.current.token
      );
    },
    onSuccess: (data) => {
      setErrorMessage("");
      setSuccessMessage(data.message);
    },
    onError: (error) => {
      setSuccessMessage("");
      setErrorMessage(error.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || email.trim() === "" || !isConnected) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    mutation.mutate({ email });
  };

  useEffect(() => {
    if (!isConnected && cancelTokenSourceRef.current) {
      cancelTokenSourceRef.current.cancel(
        "Request canceled due to network disconnection."
      );
    }
  }, [isConnected]);

  const resetState = () => {
    setEmail("");
    setErrorMessage("");
    setSuccessMessage("");
    if (cancelTokenSourceRef.current) {
      cancelTokenSourceRef.current.cancel(
        "Previous operation canceled by you."
      );
    }
  };

  return {
    email,
    setEmail,
    handleSubmit,
    isLoading: mutation.isLoading,
    isPending: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
    isSuccess: mutation.isSuccess,
    errorMessage,
    successMessage,
    setErrorMessage,
    setSuccessMessage,
    resetState, // Export resetState function
  };
};

export default useResetLink;
