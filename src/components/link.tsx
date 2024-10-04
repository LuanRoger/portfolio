import { cn } from "@/lib/shadcn-utils";
import { Url } from "next/dist/shared/lib/router/router";
import NextLink from "next/link";

interface LinkProps {
  children: React.ReactNode;
  className?: string;
  href: Url;
  target?: string | undefined;
}

export default function Link({ children, className, href, target }: LinkProps) {
  return (
    <NextLink
      target={target}
      href={href}
      className={cn("hover:underline cursor-pointer font-bold", className)}
    >
      {children}
    </NextLink>
  );
}
