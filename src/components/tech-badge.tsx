"use client";

import { Tech } from "@/types/tech";
import { Badge } from "./ui/badge";
import { cloneElement } from "react";
import { motion } from "motion/react";

interface TechProps {
  tech: Tech;
  index?: number | undefined;
}

export function TechBadge({ tech, index }: TechProps) {
  const { name, color, link, icon } = tech;

  return (
    <motion.a
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: index ? index * 0.1 : 0 }}
      href={link}
      target="_blank"
    >
      <Badge
        variant={"outline"}
        className={`inline-flex gap-1 items-center hover:bg-primary hover:text-primary-foreground duration-300 py-2`}
      >
        {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          cloneElement(icon as React.ReactElement<any>, {
            fill: color,
            style: { width: "1rem", height: "1rem" },
          })
        }
        <p>{name}</p>
      </Badge>
    </motion.a>
  );
}
