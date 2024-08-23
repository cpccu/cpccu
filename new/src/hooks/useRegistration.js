import { useMutation } from "@tanstack/react-query";
import { apiPost } from "../utils/apiAxios.util";
import { useErrorContext } from "../Context/Error.context";
import { useState } from "react";

export const useRegistration = () => {
  const [formValues, setFormValues] = useState({});
  const { addError } = useErrorContext();
  const mutation = useMutation({
    mutationFn: async (regiForm) => {
      return apiPost("/api/auth/register", regiForm);
    },
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      addError(error.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formValues);
  };

  return {
    formValues,
    setFormValues,
    isPending: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isLoading: mutation.isLoading,
    handleSubmit,
  };
};
