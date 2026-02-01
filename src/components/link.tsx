import type { Url } from "next/dist/shared/lib/router/router";
import NextLink from "next/link";
import { cn } from "@/utils/shadcn-utils";

type LinkProps = {
  href: Url;
  isExternal?: boolean;
  onClick?: () => void;
} & React.ComponentProps<"a">;

export default function Link({
  children,
  className,
  href,
  isExternal,
  onClick,
  ...props
}: LinkProps) {
  const target = isExternal ? "_blank" : "_self";

  return (
    <NextLink
      className={cn("cursor-pointer font-bold hover:underline", className)}
      href={href}
      onClick={onClick}
      target={target}
      {...props}
    >
      {children}
    </NextLink>
  );
}
