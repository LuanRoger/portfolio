"use client";

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
  timeText: string;
  className?: string;
}

export default function WakatimeDailyAverage({
  className,
  timeText,
}: WakatimeDailyAverageProps) {
  const requestDate = formatDateAsHumanReadable(new Date());

  return (
    <Card className={cn("fnoise", className)}>
      <CardHeader>
        <CardTitle>Daily average</CardTitle>
        <CardDescription>{requestDate}</CardDescription>
      </CardHeader>
      <CardContent className="size-full">
        <span className="font-bold text-lg">{timeText}</span>
      </CardContent>
    </Card>
  );
}
