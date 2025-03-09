"use client";

import { cn } from "@/utils/shadcn-utils";
import { AnimatePresence, motion, useAnimationFrame } from "motion/react";
import { useMemo, useRef, useState } from "react";

export default function Name() {
  const fontVariant = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0 },
  };
  const sharedClasses = "text-3xl";

  const [index, setIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const possibleHeaders = useMemo(() => {
    return [
      <motion.h1
        key={0}
        initial={"hidden"}
        animate={"show"}
        variants={fontVariant}
        className={cn("font-jacquard", sharedClasses)}
      >
        Luan Roger
      </motion.h1>,
      <motion.h1
        key={1}
        initial={"hidden"}
        animate={"show"}
        variants={fontVariant}
        className={cn("font-dancing", sharedClasses)}
      >
        Luan Roger
      </motion.h1>,
      <motion.h1
        key={2}
        initial={"hidden"}
        animate={"show"}
        variants={fontVariant}
        className={cn("font-vt", sharedClasses)}
      >
        Luan Roger
      </motion.h1>,
      <motion.h1
        key={3}
        initial={"hidden"}
        animate={"show"}
        variants={fontVariant}
        className={cn("font-yellowtail", sharedClasses)}
      >
        Luan Roger
      </motion.h1>,
      <motion.h1
        key={4}
        initial={"hidden"}
        animate={"show"}
        variants={fontVariant}
        className={cn("font-ubuntu", sharedClasses)}
      >
        Luan Roger
      </motion.h1>,
    ];
  }, [fontVariant]);

  const accumulatedTime = useRef(0);
  useAnimationFrame((time, delta) => {
    if (!isHovering) {
      return;
    }

    const delaySeconds = 500;
    const newAccumulatedTime = accumulatedTime.current + delta;
    accumulatedTime.current = newAccumulatedTime;
    if (newAccumulatedTime > delaySeconds) {
      setIndex((prev) => (prev + 1) % possibleHeaders.length);
      accumulatedTime.current = 0;
    }
  });

  return (
    <motion.div
      className="font-bold text-2xl select-none"
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
      whileHover={{ scale: 1.2, x: 5 }}
    >
      <AnimatePresence>{possibleHeaders[index]}</AnimatePresence>
    </motion.div>
  );
}
