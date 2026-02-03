"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../ui/chart";

type CategoryChartData = {
  data: {
    day: string;
    codingHours?: number;
    debuggingHours?: number;
  }[];
};

export default function WakatimeSummaryCategoriesChart({
  data,
}: CategoryChartData) {
  const chartConfig = {
    codingHours: {
      label: "Coding",
      color: "var(--chart-1)",
    },
    debuggingHours: {
      label: "Debugging",
      color: "var(--chart-2)",
    },
  };

  return (
    <Card className="fnoise flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Categories</CardTitle>
        <CardDescription>
          How many hours I spent on each category in the last 7 days
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          className="mx-auto aspect-square max-h-75 w-full"
          config={chartConfig}
        >
          <BarChart accessibilityLayer data={data}>
            <CartesianGrid vertical={false} />
            <XAxis axisLine={false} dataKey="day" tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <ChartTooltip content={<ChartTooltipContent />} cursor={false} />
            <Bar dataKey="codingHours" fill="var(--chart-1)" radius={4} />
            <Bar dataKey="debuggingHours" fill="var(--chart-2)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
