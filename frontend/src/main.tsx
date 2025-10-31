import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AppKitProvider } from "./lib/AppKitProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppKitProvider>
      <App />
    </AppKitProvider>
  </StrictMode>
);
// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <WagmiProvider config={config}>
//       <QueryClientProvider client={queryClient}>
//         <App />
//       </QueryClientProvider>
//     </WagmiProvider>
//   </StrictMode>
// );
