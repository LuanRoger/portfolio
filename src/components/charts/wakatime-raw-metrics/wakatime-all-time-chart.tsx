import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/utils/shadcn-utils";

interface WakatimeAllTimeChartProps {
  className?: string;
  timeText: string;
}

export default function WakatimeAllTimeChart({
  className,
  timeText,
}: WakatimeAllTimeChartProps) {
  return (
    <Card className={cn("fnoise", className)}>
      <CardHeader>
        <CardTitle>Total time coding</CardTitle>
        <CardDescription>Since 23 December 2022</CardDescription>
      </CardHeader>
      <CardContent className="size-full">
        <span className="text-lg font-bold">{timeText}</span>
      </CardContent>
    </Card>
  );
}
