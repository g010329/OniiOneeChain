import { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import "@rainbow-me/rainbowkit/styles.css";
import { Button } from "@/components/ui/button";
import { Stepper } from "@/app/_components/Stepper";

import { useWriteContract, useAccount, useReadContract } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { CreateEns } from "@/app/_components/CreateEns";
import { CreateMsg } from "@/app/_components/CreateMsg";
import { VerifyEns } from "@/app/_components/VerifyEns";
import { ensAbi } from "@/app/abis/ensAbi";
import { scrollAbi } from "@/app/abis/scrollAbi";

const CONTRACT_ADDRESS = "0xad89B2e2850590B1cD59465572441776B77aD7b1";

function Container() {
  const [currentStep, setCurrentStep] = useState(0);
  const [ensName, setEnsName] = useState("");
  const { error, isSuccess, isPending, writeContract } = useWriteContract();
  const { address } = useAccount();

  const { data, isLoading, isFetching } = useReadContract({
    abi: scrollAbi,
    address: "0x2Db0484Abb8d7Ae6552c0989f4767aBa683C3cbD",
    functionName: "l1SloadGetSubDomainName",
    args: [address],
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  const steps = [
    <CreateEns
      key="create-ens"
      ensName={ensName}
      setEnsName={setEnsName}
      startVerifing={isPending}
    />,
    // <VerifyEns key="verify-ens" />,
    <CreateMsg key="create-msg" ensName={ensName} />,
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
    <main className="p-6 min-h-screen flex flex-col font-mono bg-purple-50">
      <div className="flex justify-end mb-4">
        <ConnectButton accountStatus="address" />
      </div>
      <section className="flex-grow flex items-center justify-center overflow-hidden border-4 border-purple-50 rounded-[40px] bg-white">
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
        {currentStep !== 2 && (
          <Button
            className="min-w-[100px] bg-main hover:bg-main/80"
            onClick={() => handleStep("next")}
            disabled={
              currentStep === steps.length - 1 ||
              (!ensName && currentStep === 0)
            }
          >
            Next
          </Button>
        )}
      </div>
    </main>
  );
}

export { Container };
