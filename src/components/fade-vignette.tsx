"use client";

import { motion } from "motion/react";

type FadeVignetteProps = {
  accentColor?: string;
};

export function FadeVignette({ accentColor }: FadeVignetteProps) {
  return (
    <motion.div
      animate={{
        y: 0,
        "--tw-gradient-from-position": "20%",
        "--tw-gradient-to-position": "150%",
      }}
      className={"absolute z-10 size-full bg-linear-to-t"}
      initial={{
        y: 30,
        "--tw-gradient-from-position": "100%",
        "--tw-gradient-to-position": "100%",
      }}
      style={
        {
          "--tw-gradient-to": accentColor,
          "--tw-gradient-from": `${accentColor}00`,
          "--tw-gradient-stops":
            "var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position)",
        } as React.CSSProperties
      }
      transition={{
        duration: 1.8,
        ease: "easeInOut",
      }}
    />
  );
}
