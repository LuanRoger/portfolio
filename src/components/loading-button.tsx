import { cn } from "@/lib/shadcn-utils";
import { Button } from "./ui/button";
import LoadingIcon from "./loading-icon";

interface LoadingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  pendingText?: string | undefined;
  pending?: boolean;
}

export default function LoadingButton({
  className,
  text,
  pending = false,
  pendingText,
  ...props
}: LoadingButtonProps) {
  const _pendingText = pendingText || "Carregando...";

  return (
    <Button
      type="submit"
      className={cn("gap-2", className)}
      disabled={pending}
      {...props}
    >
      {pending && <LoadingIcon />}
      {pending ? _pendingText : text}
    </Button>
  );
}
