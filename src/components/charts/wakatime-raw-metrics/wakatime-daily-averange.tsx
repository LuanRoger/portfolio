import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/utils/shadcn-utils";
import { formatDateAsHumanReadable } from "@/utils/time";

interface WakatimeDailyAverageProps {
  className?: string;
  timeText: string;
}

export default function WakatimeDailyAverage({
  className,
  timeText,
}: WakatimeDailyAverageProps) {
  return (
    <Card className={cn("fnoise", className)}>
      <CardHeader>
        <CardTitle>Daily average</CardTitle>
        <CardDescription>
          {formatDateAsHumanReadable(new Date())}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <span className="font-bold text-lg">{timeText}</span>
      </CardContent>
    </Card>
  );
}
