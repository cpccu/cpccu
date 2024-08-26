import { useMutation } from "@tanstack/react-query";
import { signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "../utils/firebase";
import { apiPost } from "../utils/apiAxios.util";
import { useAuthContext } from "../Context/Auth.context";
import { useNavigate } from "react-router-dom";
import { useErrorContext } from "../Context/Error.context";

const useGoogleSignUp = () => {
  const { addUser } = useAuthContext();
  const { addError } = useErrorContext();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (idToken) => {
      return apiPost("/api/auth/google-signup", { idToken });
    },

    onError: (error) => {
      addError(error.message);
    },
  });

  const signUpHandler = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      console.log(result.user);
      const idToken = await result.user.getIdToken();
      mutation.mutate(idToken);
    } catch (error) {}
  };

  return {
    signUpHandler,
    created: mutation.isSuccess,
    isLoading: mutation.isLoading,
    isPending: mutation.isPending,
  };
};

export default useGoogleSignUp;
