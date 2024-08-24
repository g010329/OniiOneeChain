import { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import "@rainbow-me/rainbowkit/styles.css";
import { Button } from "@/components/ui/button";
import { Stepper } from "@/app/_components/Stepper";

import { useWriteContract, useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { CreateEns } from "@/app/_components/CreateEns";
import { CreateMsg } from "@/app/_components/CreateMsg";
import { VerifyEns } from "@/app/_components/VerifyEns";
import { ensAbi } from "@/app/abis/ensAbi";

const CONTRACT_ADDRESS = "0x9306A314b0f88D0B9dC6eac8B8eaE93ec05da86E";

function Container() {
  const [currentStep, setCurrentStep] = useState(0);
  const [ensName, setEnsName] = useState("");
  const { error, isSuccess, isPending, writeContract } = useWriteContract();
  const { address } = useAccount();

  const steps = [
    <CreateEns
      key="create-ens"
      ensName={ensName}
      setEnsName={setEnsName}
      startVerifing={isPending}
    />,
    <VerifyEns key="verify-ens" />,
    <CreateMsg key="step-3" />,
  ];

  const handleCreateEns = async () => {
    await writeContract({
      address: CONTRACT_ADDRESS,
      abi: ensAbi,
      functionName: "registerSubdomain",
      args: [ensName, address],
    });
  };

  const nextStep = () =>
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const handleStep = (direction: "next" | "prev") => {
    if (currentStep === 0) {
      handleCreateEns();
      return;
    }

    direction === "next" ? nextStep() : prevStep();
  };

  useEffect(() => {
    if (isSuccess) {
      setCurrentStep(1);
    }

    if (!!error) {
      console.error(error);
    }
  }, [isSuccess, error]);

  return (
    <main className="p-6 min-h-screen flex flex-col font-mono">
      <div className="flex justify-end mb-4">
        <ConnectButton accountStatus="address" />
      </div>
      <section className="flex-grow flex items-center justify-center overflow-hidden">
        <Stepper childrens={steps} currentStep={currentStep} />
      </section>
      <div className="flex justify-between mt-4">
        <Button
          variant="outline"
          onClick={() => handleStep("prev")}
          disabled={currentStep === 0}
        >
          <FaChevronLeft />
        </Button>
        <Button
          className="min-w-[100px] bg-main hover:bg-main/80"
          onClick={() => handleStep("next")}
          disabled={
            currentStep === steps.length - 1 || (!ensName && currentStep === 0)
          }
        >
          Next
        </Button>
      </div>
    </main>
  );
}

export { Container };
