import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useErrorContext } from "../Context/Error.context";
import { apiPost } from "../utils/apiAxios.util";
import { useAuthContext } from "../Context/Auth.context";

const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPass, setShowPass] = useState(false);
  const { addError } = useErrorContext();
  const { addUser } = useAuthContext();

  // Mutation for login
  const mutation = useMutation({
    mutationFn: async (loginData) => {
      const { email, password } = loginData;
      return apiPost("/api/auth/login", { email, password });
    },
    onSuccess: (data) => {
      addUser(data.data);
    },
    onError: (error) => {
      console.log(error);
      addError(error.message);
    },
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      [email, password].some((field) => !field || field.trim() === "") ||
      mutation.isPending ||
      mutation.isLoading
    ) {
      return;
    }
    mutation.mutate({ email, password });
  };

  return {
    email,
    password,
    isShowPass,
    handleSubmit,
    setEmail,
    setPassword,
    setShowPass,
    isLoading: mutation.isLoading,
    isPending: mutation.isPending,
    isSuccess: mutation.isSuccess,
  };
};

export default useLogin;
