import React, { createContext, useContext, useState } from "react";

// ErrorsContext without default values as it will be provided by the ErrorProvider
const ErrorsContext = createContext();

const ErrorProvider = ({ children }) => {
  const [isAnyError, setAnyError] = useState(false);
  const [anyErrorMessage, setAnyErrorMessage] = useState("");

  const addError = (message) => {
    setAnyError(true);
    setAnyErrorMessage(message);
  };

  const resetError = () => {
    setAnyError(false);
    setAnyErrorMessage("");
  };

  return (
    <ErrorsContext.Provider
      value={{ isAnyError, anyErrorMessage, addError, resetError }}
    >
      {children}
    </ErrorsContext.Provider>
  );
};

// Custom hook to use the ErrorsContext
const useErrorContext = () => useContext(ErrorsContext);

export { ErrorProvider, useErrorContext };
