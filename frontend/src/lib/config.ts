import { createConfig, http } from "wagmi";
import { anvil } from "wagmi/chains";
import { metaMask } from "wagmi/connectors";

export const config = createConfig({
  chains: [anvil],
  connectors: [metaMask()],
  transports: {
    [anvil.id]: http(),
    // [mainnet.id]: http(),
    // [sepolia.id]: http(),
  },
});
