"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";

interface CategoryChartData {
  data: {
    day: string;
    codingHours?: number;
    debuggingHours?: number;
  }[];
}

export default function WakatimeSummaryCategories({ data }: CategoryChartData) {
  const chartConfig = {
    codingHours: {
      label: "Coding",
      color: "hsl(var(--chart-1))",
    },
    debuggingHours: {
      label: "Debugging",
      color: "hsl(var(--chart-2))",
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
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px] w-full"
        >
          <BarChart accessibilityLayer data={data}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="day" tickLine={false} axisLine={false} />
            <YAxis tickLine={false} axisLine={false} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Bar dataKey="codingHours" fill="hsl(var(--chart-1))" radius={4} />
            <Bar
              dataKey="debuggingHours"
              fill="hsl(var(--chart-2))"
              radius={4}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
