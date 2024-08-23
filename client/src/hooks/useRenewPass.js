import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useErrorContext } from "../Context/Error.context";
import { apiPatch } from "../utils/apiAxios.util";

export const useRenewPass = () => {
  const [password, setPassword] = useState("");
  const [retype, setRetype] = useState("");
  const [code, setCode] = useState("");
  const [token, setToken] = useState("");
  const [isShowPass, setShowPass] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [successModal, setSuccessModal] = useState(false);

  const { addError } = useErrorContext();

  const mutation = useMutation({
    mutationFn: async ({ code, token, password }) => {
      return await apiPatch(`/api/auth/reset-password`, {
        code,
        token,
        password,
        retype,
      });
    },
    onSuccess: () => {
      setSuccessMessage("Password updated successfully");
      setSuccessModal(true);
    },
    onError: (error) => {
      addError(error.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!password || !retype) {
      return;
    }

    mutation.mutate({ code, token, password, retype });
  };

  return {
    password,
    setPassword,
    retype,
    setRetype,
    code,
    setCode,
    token,
    setToken,
    isShowPass,
    setShowPass,
    successMessage,
    setSuccessMessage,
    isError: mutation.isError,
    error: mutation.error,
    isSuccess: mutation.isSuccess,
    isPending: mutation.isPending,
    isLoading: mutation.isLoading,
    handleSubmit,
    successModal,
    setSuccessModal,
  };
};
