"use client";

import { Tech } from "@/types/tech";
import { Badge } from "./ui/badge";
import { cloneElement } from "react";

interface TechProps {
  tech: Tech;
  index?: number | undefined;
}

export function TechBadge({ tech }: TechProps) {
  const { name, color, link, icon } = tech;

  return (
    <a href={link} target="_blank">
      <Badge
        variant={"outline"}
        className={`hover:bg-primary hover:text-primary-foreground inline-flex items-center gap-1 py-2 duration-300`}
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
    </a>
  );
}
