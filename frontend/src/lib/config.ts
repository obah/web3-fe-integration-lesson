import { createConfig, http } from "wagmi";
import { anvil } from "wagmi/chains";
import { metaMask } from "wagmi/connectors";

// const projectId = "852540ca8d1f1dc5d246d0fa982aac30";

export const config = createConfig({
  chains: [anvil],
  connectors: [metaMask()],
  transports: {
    [anvil.id]: http(),
    // [mainnet.id]: http(),
    // [sepolia.id]: http(),
  },
});
