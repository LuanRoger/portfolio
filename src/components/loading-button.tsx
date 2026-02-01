import { cn } from "@/utils/shadcn-utils";
import LoadingIcon from "./loading-icon";
import { Button } from "./ui/button";

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
      className={cn("gap-2", className)}
      disabled={pending}
      type="submit"
      {...props}
    >
      {pending && <LoadingIcon />}
      {pending ? _pendingText : text}
    </Button>
  );
}
