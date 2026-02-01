"use client";

import { IconArrowUp } from "@tabler/icons-react";
import IconLabel from "./icon-label";
import Link from "./link";

interface ScrollTopLinkProps {
  className?: string;
}

export default function ScrollTopLink({ className }: ScrollTopLinkProps) {
  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <Link className={className} href={"/"} onClick={scrollToTop}>
      <IconLabel icon={<IconArrowUp size={14} />}>Top</IconLabel>
    </Link>
  );
}
