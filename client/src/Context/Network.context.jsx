import React, { createContext, useContext, useEffect, useState } from "react";
import { useNetworkStatus } from "../hooks/useNetworkStatus";

const NetworkContext = createContext();

const NetworkProvider = ({ children }) => {
  const isOnline = useNetworkStatus();
  const [isConnected, setConnected] = useState(isOnline);

  useEffect(() => {
    setConnected(isOnline);
  }, [isOnline]);

  return (
    <NetworkContext.Provider value={{ isConnected }}>
      {children}
    </NetworkContext.Provider>
  );
};

const useNetworkConnection = () => useContext(NetworkContext);

export { NetworkContext, NetworkProvider, useNetworkConnection };
