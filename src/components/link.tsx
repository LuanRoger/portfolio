import { cn } from "@/utils/shadcn-utils";
import { Url } from "next/dist/shared/lib/router/router";
import NextLink from "next/link";

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
      target={target}
      href={href}
      className={cn("cursor-pointer font-bold hover:underline", className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </NextLink>
  );
}
