"use client";
import "@rainbow-me/rainbowkit/styles.css";

import { RainbowKitProvider, lightTheme } from "@rainbow-me/rainbowkit";
import { config } from "@/configs/rainbowkit.config";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const queryClient = new QueryClient();

export default function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          locale="en-US"
          theme={lightTheme({
            ...lightTheme.accentColors.purple,
          })}
        >
          <main className="p-6">
            <div className="flex justify-end">
              <ConnectButton accountStatus="address" />
            </div>
            <div className="flex min-h-screen flex-col items-center justify-between"></div>
          </main>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
