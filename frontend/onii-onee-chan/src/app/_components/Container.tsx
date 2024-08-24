import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import "@rainbow-me/rainbowkit/styles.css";
import { Button } from "@/components/ui/button";
import { Stepper } from "@/app/_components/Stepper";

import { useWriteContract } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { CreateEns } from "@/app/_components/CreateEns";
import { VerifyEns } from "@/app/_components/VerifyEns";
import { ensAbi } from "@/app/abis/ensAbi";

function Container() {
  const [currentStep, setCurrentStep] = useState(1);
  const [ensName, setEnsName] = useState("");
  const { data, error, isPending, writeContract } = useWriteContract();

  const steps = [
    <CreateEns
      key="create-ens"
      ensName={ensName}
      setEnsName={setEnsName}
      startVerifing={isPending}
    />,
    <VerifyEns key="verify-ens" />,
    <div key="step-3">Step 3 Content</div>,
  ];

  const handleCreateEns = async () => {
    await writeContract({
      address: "0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2",
      abi: ensAbi,
      functionName: "mint",
      args: [
        {
          name: ensName,
        },
      ],
    });

    if (data) {
      console.log(data);
      setCurrentStep(2);
    }

    if (error) {
      console.error(error);
    }
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

  return (
    <main className="p-6 min-h-screen flex flex-col">
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
