import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiPost } from "../utils/apiAxios.util";
import { useAuthContext } from "../Context/Auth.context";
import { useErrorContext } from "../Context/Error.context";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPass, setShowPass] = useState(false);
  const navigate = useNavigate();
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
      navigate(`/profile/${data.data._id}`);
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
