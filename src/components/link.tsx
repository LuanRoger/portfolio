import { cn } from "@/utils/shadcn-utils";
import { Url } from "next/dist/shared/lib/router/router";
import NextLink from "next/link";

interface LinkProps {
  children: React.ReactNode;
  className?: string;
  href: Url;
  isExternal?: boolean;
  onClick?: () => void;
}

export default function Link({
  children,
  className,
  href,
  isExternal,
  onClick,
}: LinkProps) {
  const target = isExternal ? "_blank" : "_self";

  return (
    <NextLink
      target={target}
      href={href}
      className={cn("cursor-pointer font-bold hover:underline", className)}
      onClick={onClick}
    >
      {children}
    </NextLink>
  );
}
