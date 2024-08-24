import { mainnet, sepolia } from "wagmi/chains";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";

// Define the Scroll Devnet chain
const scrollDevnet = {
  id: 2227728,
  name: "Scroll Devnet",
  network: "scroll-devnet",
  nativeCurrency: {
    decimals: 18,
    name: "ETH",
    symbol: "Sepolia ETH",
  },
  rpcUrls: {
    public: { http: ["https://l1sload-rpc.scroll.io"] },
    default: { http: ["https://l1sload-rpc.scroll.io"] },
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://l1sload-blockscout.scroll.io",
    },
  },
  testnet: true,
};

const config = getDefaultConfig({
  appName: "onii-onee-chan",
  projectId: "YOUR_PROJECT_ID",
  chains: [mainnet, sepolia, scrollDevnet],
  ssr: true,
});

export { config };
