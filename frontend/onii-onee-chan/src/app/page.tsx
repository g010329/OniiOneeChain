"use client";
import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import "@rainbow-me/rainbowkit/styles.css";
import { Button } from "@/components/ui/button";
import { StepContainer } from "@/app/_components/StepContainer";

import { RainbowKitProvider, lightTheme } from "@rainbow-me/rainbowkit";
import { config } from "@/configs/rainbowkit.config";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { CreateEns } from "@/app/_components/CreateEns";

const queryClient = new QueryClient();

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    <CreateEns key="create-ens" />,
    <div key="step-2">Step 2 Content</div>,
    <div key="step-3">Step 3 Content</div>,
  ];

  const nextStep = () =>
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          locale="en-US"
          theme={lightTheme({
            ...lightTheme.accentColors.purple,
          })}
        >
          <main className="p-6 min-h-screen flex flex-col">
            <div className="flex justify-end mb-4">
              <ConnectButton accountStatus="address" />
            </div>
            <section className="flex-grow flex items-center justify-center overflow-hidden">
              <StepContainer childrens={steps} currentStep={currentStep} />
            </section>
            <div className="flex justify-between mt-4">
              <button
                onClick={prevStep}
                className="p-2"
                disabled={currentStep === 0}
              >
                <FaChevronLeft />
              </button>
              <Button
                onClick={nextStep}
                disabled={currentStep === steps.length - 1}
              >
                Confirm
              </Button>
            </div>
          </main>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
