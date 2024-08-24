import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

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
    return <Image src="/loading.gif" alt="verify" width={250} height={250} />;
  }

  return (
    <div className="flex items-end gap-2">
      <motion.div
        animate={expandAnimation}
        transition={{ duration: 0.2, times: [0, 0.7, 1] }}
        className="space-y-6"
      >
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-slate-900">
            Create ENS Subname
          </h1>
          <p className="text-lg text-slate-400">
            Create your own subname to join the community
          </p>
        </div>
        <Input
          value={ensName}
          onChange={(e) => setEnsName(e.target.value)}
          className="focus:border-none focus-visible:ring-main h-[50px] rounded-2xl text-xl placeholder:text-slate-400"
          placeholder="Your Name"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </motion.div>
      <p className="text-2xl text-slate-500">.gawrgura.eth</p>
    </div>
  );
}

export { CreateEns };
