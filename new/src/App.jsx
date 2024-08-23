import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Render from "./Route";
import Provider from "./components/Provider";
// Create a QueryClient instance
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <Render />
      </Provider>
    </QueryClientProvider>
  );
}
