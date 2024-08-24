import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useChainId } from "wagmi";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useState, useEffect } from "react";

const SCROLL_DEVNET_CHAIN_ID = 2227728;

function VerifyEns() {
  const chainId = useChainId();
  const { openConnectModal } = useConnectModal();
  const [showNetworkModal, setShowNetworkModal] = useState(false);
  console.log(chainId);

  //   useEffect(() => {
  //     if (chainId !== SCROLL_DEVNET_CHAIN_ID) {
  //       console.log("123123");
  //       setShowNetworkModal(true);
  //     } else {
  //       setShowNetworkModal(false);
  //     }
  //   }, [chainId]);

  const shakeAnimation = {
    scale: [1, 1.03, 1.03, 1.03, 1.03, 1],
    rotate: [0, -2, 2, -2, 2, 0],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      repeatDelay: 1.2,
    },
  };

  return (
    <>
      <motion.div animate={shakeAnimation}>
        <Card className="w-[500px]">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </motion.div>

      {showNetworkModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">請切換到 Scroll Devnet</h2>
            <p className="mb-4">
              當前網絡不是 Scroll Devnet。請切換網絡以繼續。
            </p>
            <button
              onClick={openConnectModal}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              切換網絡
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export { VerifyEns };
