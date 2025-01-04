"use client";

import { Tech } from "@/lib/types/tech";
import { TechBadge } from "./tech-badge";
import { motion } from "motion/react";

interface TechGroupProps {
  groupTechs: Tech[];
}

export function TechGroup({ groupTechs }: TechGroupProps) {
  const category = groupTechs[0].category;

  return (
    <>
      <motion.h2
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="font-bold"
      >
        {category}
      </motion.h2>
      <div className="flex flex-wrap gap-2">
        {groupTechs.map((tech, index) => (
          <TechBadge key={tech.name} tech={tech} index={index} />
        ))}
      </div>
    </>
  );
}
