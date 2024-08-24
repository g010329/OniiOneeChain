import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

interface CreateEnsProps {
  ensName: string;
  setEnsName: (ensName: string) => void;
  startVerifing: boolean;
}

function CreateEns({ ensName, setEnsName, startVerifing }: CreateEnsProps) {
  const [isFocused, setIsFocused] = useState(false);

  const expandAnimation = {
    width: isFocused ? ["480px", "680px", "660px"] : "580px",
  };

  if (startVerifing) {
    return <Image src="/loading.gif" alt="verify" width={250} height={250} />;
  }

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">
          Welcome to Our Community!
        </h1>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Enter your name 🧀",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "Create your very own ENS 🍎",
            1000,
            "Send your love and message 🍓",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{
            fontSize: "1.2em",
            display: "inline-block",
            color: "#94a3b8",
          }}
          repeat={Infinity}
        />
      </div>
      <div className="flex items-end gap-2">
        <motion.div
          animate={expandAnimation}
          transition={{ duration: 0.2, times: [0, 0.7, 1] }}
          className="space-y-6"
        >
          <Input
            value={ensName}
            onChange={(e) => setEnsName(e.target.value)}
            className="focus:border-none focus-visible:ring-main h-[50px] rounded-2xl text-xl placeholder:text-[#94a3b8]"
            placeholder="Your Name"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </motion.div>
        <p className="text-2xl text-[#94a3b8]">.gawrgaru.eth</p>
      </div>
    </div>
  );
}

export { CreateEns };
