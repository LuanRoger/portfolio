"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

export default function RoleTitle() {
  const text = useMemo(() => {
    const role = "Full-stack developper";

    return {
      text: role,
      length: role.length,
      array: role.split(""),
    };
  }, []);

  return (
    <motion.h2 className="font-mono text-sm">
      {text.array.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.h2>
  );
}
