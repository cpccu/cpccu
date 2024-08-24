import { useMutation } from "@tanstack/react-query";
import { axios } from "axios";

const useData = () => {
  const { isLoading, isPendding, isError, isSuccess } = useMutation({
    mutationFn: async () => {
      return axios("/api");
    },
    onSuccess: (data) => {},
    onError: (error) => {},
  });

  return {
    isLoading,
    isPendding,
    isError,
    isSuccess,
  };
};
