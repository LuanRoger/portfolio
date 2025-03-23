import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/utils/shadcn-utils";

interface WakatimeAllTimeChartProps {
  className?: string;
  hoursText: string;
}

export default function WakatimeAllTimeChart({ className, hoursText }: WakatimeAllTimeChartProps) {
  return (
    <Card className={cn("fnoise", className)}>
      <CardHeader>
        <CardTitle>
          Total time coding
        </CardTitle>
        <CardDescription>
          Since 23 December 2022
        </CardDescription>
      </CardHeader>
      <CardContent>
        <span className="font-bold text-lg">{hoursText}</span>
      </CardContent>
    </Card>
  );

}