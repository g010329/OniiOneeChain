import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { useState } from "react";

function CreateMsg() {
  const [isFocused, setIsFocused] = useState(false);

  const expandAnimation = {
    width: isFocused ? ["480px", "680px", "660px"] : "480px",
  };

  const messages = ["hello", "hi", "hey", "yoyo"];

  return (
    <motion.div
      animate={expandAnimation}
      transition={{ duration: 0.2, times: [0, 0.7, 1] }}
      className="space-y-6"
    >
      <div className="h-[400px] w-full">test test</div>
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">Send your message</h1>
      </div>
      <Input
        className="focus:border-none focus-visible:ring-[#5A55EB] h-[50px] rounded-2xl text-xl placeholder:text-slate-400"
        placeholder="hello"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </motion.div>
  );
}

export { CreateMsg };
