"use client";

import {
  IconArrowUp,
  IconBook2,
  IconBriefcase2,
  IconMail,
  IconUser,
} from "@tabler/icons-react";
import IconLabel from "./icon-label";

export default function PageLinks() {
  const iconSize = 14;

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <ul className="flex flex-row flex-wrap justify-evenly w-full font-mono gap-2">
      <li>
        <button
          onClick={scrollToTop}
          className="inline-flex gap-1 items-center"
        >
          <IconLabel icon={<IconArrowUp size={iconSize} />}>Top</IconLabel>
        </button>
      </li>
      <li>
        <a href="#about">
          <IconLabel icon={<IconUser size={iconSize} />}>About</IconLabel>
        </a>
      </li>
      <li>
        <a href="#projects">
          <IconLabel icon={<IconBook2 size={iconSize} />}>Projects</IconLabel>
        </a>
      </li>
      <li>
        <a href="#expirience">
          <IconLabel icon={<IconBriefcase2 size={iconSize} />}>
            Expirience
          </IconLabel>
        </a>
      </li>
      <li>
        <a href="#contact">
          <IconLabel icon={<IconMail size={iconSize} />}>Contact</IconLabel>
        </a>
      </li>
    </ul>
  );
}
