"use client";

import "@rainbow-me/rainbowkit/styles.css";

import { RainbowKitProvider, lightTheme } from "@rainbow-me/rainbowkit";
import { config } from "@/configs/rainbowkit.config";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Container } from "@/app/_components/Container";

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
          <Container />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
