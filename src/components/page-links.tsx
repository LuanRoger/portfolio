"use client";

import {
  IconBook2,
  IconBriefcase2,
  IconMail,
  IconUser,
} from "@tabler/icons-react";
import IconLabel from "./icon-label";
import Link from "./link";

export default function PageLinks() {
  const iconSize = 14;

  return (
    <ul className="flex w-full flex-row flex-wrap justify-evenly gap-2 font-mono">
      <li>
        <Link href="#about">
          <IconLabel icon={<IconUser size={iconSize} />}>About</IconLabel>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <IconLabel icon={<IconBook2 size={iconSize} />}>Projects</IconLabel>
        </Link>
      </li>
      <li>
        <Link href="#expirience">
          <IconLabel icon={<IconBriefcase2 size={iconSize} />}>
            Expirience
          </IconLabel>
        </Link>
      </li>
      <li>
        <Link href="#contact">
          <IconLabel icon={<IconMail size={iconSize} />}>Contact</IconLabel>
        </Link>
      </li>
    </ul>
  );
}
