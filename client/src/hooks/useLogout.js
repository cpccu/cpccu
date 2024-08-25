import { useMutation } from "@tanstack/react-query";
import { apiGet } from "../utils/apiAxios.util";
import { useNavigate } from "react-router-dom";
import { useErrorContext } from "../Context/Error.context";

const useLogout = () => {
  const navigate = useNavigate();
  const { addError } = useErrorContext();

  const mutation = useMutation({
    mutationFn: () => {
      return apiGet("/api/auth/logout");
    },
    onSuccess: (data) => {
      console.log(data);
      navigate("/login");
    },
  });

  const logoutHandler = () => {
    mutation.mutate();
  };

  return {
    logoutHandler,
    isPending: mutation.isPending,
    isLoading: mutation.isLoading,
  };
};

export { useLogout };
