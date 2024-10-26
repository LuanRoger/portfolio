"use client";

import { cn } from "@/lib/shadcn-utils";
import { AnimatePresence, motion } from "framer-motion";

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
        "relative rounded-xl overflow-clip border border-border justify-between flex flex-col sm:max-md:min-h-80",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0.5 }}
        variants={supportVariants}
        className="absolute flex flex-row flex-wrap gap-2 left-0 top-0
            z-30 bg-gradient-to-b from-background w-full p-2"
      >
        {support}
      </motion.div>
      <motion.div
        variants={descriptionVariants}
        className="flex flex-col items-end gap-2 z-30 max-h-full w-full absolute left-0 bottom-0"
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
          className="w-full h-full fnoise space-y-2 p-4"
        >
          {header}
          <div className="font-bold">{title}</div>
          <div className="font-normal text-sm">{description}</div>
        </motion.div>
      </motion.div>
      <div className="transition absolute z-10 w-full h-full">{banner}</div>
    </motion.div>
  );
}
