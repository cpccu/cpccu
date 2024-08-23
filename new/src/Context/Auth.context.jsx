import React, { createContext, useContext, useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiGet } from "../utils/apiAxios.util";

const AuthContext = createContext({
  user: null,
  logStatus: false,
  addUser: () => {},
  removeUser: () => {},
  isLoading: false,
  isPending: false,
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [logStatus, setLogStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isPending, setIsPending] = useState(false);

  const addUser = (data) => {
    setUser(data);
    setLogStatus(true);
  };

  const removeUser = () => {
    setUser(null);
    setLogStatus(false);
  };

  const mutation = useMutation({
    mutationFn: async () => {
      setIsPending(true); // Set pending to true before fetching
      return apiGet("/api/users/user");
    },
    onSuccess: (data) => {
      if (data.data) {
        addUser(data.data);
      } else {
        removeUser();
      }
    },
    onError: () => {
      removeUser();
    },
    onSettled: () => {
      setIsPending(false); // Reset pending state after mutation settles
      setIsLoading(false); // Reset loading state
    },
  });

  useEffect(() => {
    mutation.mutate();
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <AuthContext.Provider
      value={{ user, logStatus, addUser, removeUser, isLoading, isPending }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuthContext };
