import { cn } from "@/lib/shadcn-utils";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Link({ children, className, ...props }: LinkProps) {
  return <a {...props} className={cn("hover:underline cursor-pointer", className)}>{children}</a>;
}
