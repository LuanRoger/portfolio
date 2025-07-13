"use client";

import { Pie, PieChart } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { formatBytesInMB } from "@/utils/formater";

interface GitHubLanguagesChartProps {
  data: { [name: string]: { size: number; color: string } };
}

export default function GitHubLanguagesChart({
  data,
}: GitHubLanguagesChartProps) {
  const chartConfig: ChartConfig = Object.entries(data).reduce(
    (acc, [name, { color }]) => ({
      ...acc,
      [name]: {
        label: name,
        fill: `hex(${color})`,
      },
    }),
    {},
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
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px] w-full"
        >
          <PieChart>
            <Pie data={chartData} dataKey="value" />
            <ChartLegend
              content={<ChartLegendContent nameKey="name" />}
              className="-translate-y-2 flex-wrap gap-2"
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  formatter={(value) => formatBytesInMB(value as number)}
                  hideLabel={false}
                />
              }
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
