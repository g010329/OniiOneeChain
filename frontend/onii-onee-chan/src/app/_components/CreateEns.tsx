import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { useState } from "react";

function CreateEns() {
  const [isFocused, setIsFocused] = useState(false);

  const expandAnimation = {
    width: isFocused ? ["480px", "680px", "660px"] : "480px",
  };

  return (
    <motion.div
      animate={expandAnimation}
      transition={{ duration: 0.2, times: [0, 0.7, 1] }}
    >
      <Input
        className="focus:border-none focus-visible:ring-[#5A55EB] h-[50px] rounded-2xl text-xl placeholder:text-slate-400"
        placeholder="{{yourname}}.onii-onee-chan.eth"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </motion.div>
  );
}

export { CreateEns };
