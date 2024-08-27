import { useMutation } from "@tanstack/react-query";
import { signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "../utils/firebase";
import { apiPost } from "../utils/apiAxios.util";
import { useAuthContext } from "../Context/Auth.context";
import { useNavigate } from "react-router-dom";
import { useErrorContext } from "../Context/Error.context";

const useGoogleLogin = () => {
  const { addUser } = useAuthContext();
  const { addError } = useErrorContext();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (idToken) => {
      return apiPost("/api/auth/google-signin", { idToken });
    },
    onSuccess: (data) => {
      addUser(data.data);
      navigate(`/profile/${data.data._id}`);
    },
    onError: (error) => {
      addError(error.message);
    },
  });

  const loginHandler = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      console.log(result.user);
      const idToken = await result.user.getIdToken();
      mutation.mutate(idToken);
    } catch (error) {}
  };

  return {
    loginHandler,
    isLoading: mutation.isLoading,
    isPending: mutation.isPending,
  };
};

export default useGoogleLogin;
