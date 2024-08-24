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
import { useChainModal } from "@rainbow-me/rainbowkit";
import { useEffect } from "react";

const SCROLL_DEVNET_CHAIN_ID = 2227728;

function VerifyEns() {
  const chainId = useChainId();
  const { openChainModal } = useChainModal();

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
  );
}

export { VerifyEns };
