"use client";

import { cn } from "@/utils/shadcn-utils";
import { AnimatePresence, motion } from "motion/react";

interface BentoGridItemProps {
  className?: string;
  title?: string | React.ReactNode;
  support?: string | React.ReactNode;
  links?: (string | React.ReactNode)[];
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  banner?: React.ReactNode;
}

export default function BentoGridItem({
  className,
  title,
  support,
  links,
  description,
  header,
  banner,
}: BentoGridItemProps) {
  const supportVariants = { hover: { opacity: 1 } };
  const descriptionVariants = {
    hover: { bottom: -80 },
  };
  const descriptionContainerVariants = {
    hover: { opacity: 0.8 },
  };
  const linksContainerVariants = {
    hover: { backgroundColor: "#09090B", transition: { delay: 0.2 } },
  };
  const linksVariants = { hover: { y: 0, opacity: 1 } };

  return (
    <motion.div
      whileHover={"hover"}
      whileTap={"hover"}
      className={cn(
        "border-border relative flex flex-col justify-between overflow-clip rounded-xl border sm:max-lg:min-h-80",
        className,
      )}
    >
      <motion.div
        initial={{ opacity: 0.5 }}
        variants={supportVariants}
        className="from-background absolute top-0 left-0 z-30 flex w-full flex-row flex-wrap gap-2 bg-linear-to-b p-2"
      >
        {support}
      </motion.div>
      <motion.div
        variants={descriptionVariants}
        className="absolute bottom-0 left-0 z-30 flex max-h-full w-full flex-col items-end gap-2"
      >
        <motion.div
          variants={linksContainerVariants}
          className="mx-2 inline-flex gap-2 rounded-md p-1"
        >
          {links && (
            <AnimatePresence>
              {links.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 10, opacity: 0 }}
                  variants={linksVariants}
                >
                  {link}
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </motion.div>
        <motion.div
          variants={descriptionContainerVariants}
          className="fnoise h-full w-full space-y-2 p-4"
        >
          {header}
          <div className="font-bold">{title}</div>
          <div className="text-sm font-normal">{description}</div>
        </motion.div>
      </motion.div>
      <div className="absolute z-10 h-full w-full transition">{banner}</div>
    </motion.div>
  );
}
