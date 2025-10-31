import { base, baseSepolia } from "@reown/appkit/networks";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { createAppKit } from "@reown/appkit/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";

const queryClient = new QueryClient();

const projectId = import.meta.env.VITE_PROJECT_ID ?? "";

const networks = [base, baseSepolia];

const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: true,
});

createAppKit({
  adapters: [wagmiAdapter],
  networks: [base, baseSepolia],
  projectId,
  features: {
    analytics: true,
  },
});

export function AppKitProvider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
