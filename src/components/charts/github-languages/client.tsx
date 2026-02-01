"use client";

import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { formatBytesInMB } from "@/utils/formater";

type GitHubLanguagesChartProps = {
  data: { [name: string]: { size: number; color: string } };
};

export default function GitHubLanguagesChart({
  data,
}: GitHubLanguagesChartProps) {
  const chartConfig: ChartConfig = Object.entries(data).reduce(
    (acc, [name, { color }]) => {
      acc[name] = {
        label: name,
        color: `hex(${color})`,
      };
      return acc;
    },
    {} as ChartConfig
  );
  const chartData = Object.entries(data).map(([name, { size, color }]) => ({
    name,
    value: size,
    formattedValue: formatBytesInMB(size),
    fill: color,
  }));

  return (
    <Card className="fnoise flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Languages</CardTitle>
        <CardDescription>
          Distribution of programming languages used in my last updated
          repositories.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          className="mx-auto aspect-square max-h-75 w-full"
          config={chartConfig}
        >
          <PieChart>
            <Pie data={chartData} dataKey="value" />
            <ChartLegend
              className="-translate-y-2 flex-wrap gap-2"
              content={<ChartLegendContent nameKey="name" />}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  formatter={(value) => formatBytesInMB(value as number)}
                  hideLabel={false}
                />
              }
              cursor={false}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
