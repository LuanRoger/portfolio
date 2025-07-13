"use client";

import { IconArrowUp } from "@tabler/icons-react";
import Link from "./link";
import IconLabel from "./icon-label";

interface ScrollTopLinkProps {
  className?: string;
}

export default function ScrollTopLink({ className }: ScrollTopLinkProps) {
  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <Link href={"/"} onClick={scrollToTop} className={className}>
      <IconLabel icon={<IconArrowUp size={14} />}>Top</IconLabel>
    </Link>
  );
}
