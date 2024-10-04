import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

interface HoverTooltipProps {
  text: string;
  children: React.ReactNode;
}

export default function HoverTooltip({ text, children }: HoverTooltipProps) {
  return (
    <TooltipProvider>
    <Tooltip>
        <TooltipTrigger asChild className="cursor-pointer">
            {children}
        </TooltipTrigger>
        <TooltipContent>
            <p>{text}</p>
        </TooltipContent>
    </Tooltip>
    </TooltipProvider>
  );
}
