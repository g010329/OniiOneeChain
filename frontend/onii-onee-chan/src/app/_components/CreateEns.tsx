import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { useState } from "react";

interface CreateEnsProps {
  ensName: string;
  setEnsName: (ensName: string) => void;
  startVerifing: boolean;
}

function CreateEns({ ensName, setEnsName, startVerifing }: CreateEnsProps) {
  const [isFocused, setIsFocused] = useState(false);

  const expandAnimation = {
    width: isFocused ? ["480px", "680px", "660px"] : "480px",
  };

  if (startVerifing) {
    return <div>Verifying...</div>;
  }

  return (
    <div className="flex items-end gap-2">
      <motion.div
        animate={expandAnimation}
        transition={{ duration: 0.2, times: [0, 0.7, 1] }}
      >
        <Input
          value={ensName}
          onChange={(e) => setEnsName(e.target.value)}
          className="focus:border-none focus-visible:ring-main h-[50px] rounded-2xl text-xl placeholder:text-slate-400"
          placeholder="Your Name"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </motion.div>
      <p className="text-2xl text-slate-500">.onii-onee-chan.eth</p>
    </div>
  );
}

export { CreateEns };
