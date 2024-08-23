import { AuthProvider } from "../Context/Auth.context";
import { ErrorProvider } from "../Context/Error.context";
import { NetworkProvider } from "../Context/Network.context";
import Error from "./../pages/GlobalError";

export default function Provider({ children }) {
  return (
    <NetworkProvider>
      <ErrorProvider>
        <AuthProvider>
          <Error />
          {children}
        </AuthProvider>
      </ErrorProvider>
    </NetworkProvider>
  );
}
