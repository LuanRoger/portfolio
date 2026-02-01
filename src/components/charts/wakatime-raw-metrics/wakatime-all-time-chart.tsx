import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/utils/shadcn-utils";

type WakatimeAllTimeChartProps = {
  className?: string;
  timeText: string;
};

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
        <span className="font-bold text-lg">{timeText}</span>
      </CardContent>
    </Card>
  );
}
