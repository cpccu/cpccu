import React, { createContext, useContext, useState } from "react";

const SuccessContext = createContext();

const SuccessProvider = ({ children }) => {
  const [isAnySuccess, setAnySuccess] = useState(false);
  const [anySuccessMessage, setAnySuccessMessage] = useState("");

  const addSuccess = (message) => {
    setAnySuccess(true);
    setAnySuccessMessage(message);
  };

  const resetSuccess = () => {
    setAnySuccess(false);
    setAnySuccessMessage("");
  };

  return (
    <SuccessContext.Provider
      value={{ isAnySuccess, anySuccessMessage, addSuccess, resetSuccess }}
    >
      {children}
    </SuccessContext.Provider>
  );
};

const useSuccessContext = () => useContext(SuccessContext);

export { SuccessContext, SuccessProvider, useSuccessContext };
