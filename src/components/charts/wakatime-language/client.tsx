"use client";

import { Label, Pie, PieChart } from "recharts";
import { secondsToHours } from "@/utils/time";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "../../ui/chart";

interface LanguageChartData {
  totalInSeconds: number;
  data: {
    name: string;
    value: number;
    fill?: string;
  }[];
}

export default function WakatimeLanguagesChart({
  data,
  totalInSeconds,
}: LanguageChartData) {
  const chartConfig: ChartConfig = data.reduce(
    (config, item) => ({
      ...config,
      [item.name]: {
        label: item.name,
        color: item.fill ? `hex(${item.fill})` : "hsl(var(--chart-1))",
      },
    }),
    {}
  );
  const hours = secondsToHours(totalInSeconds);

  return (
    <Card className="fnoise flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Languages</CardTitle>
        <CardDescription>
          How many hours I spent on each language in the last 7 days
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          className="mx-auto aspect-square max-h-[300px] w-full"
          config={chartConfig}
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent hideLabel />}
              cursor={false}
            />
            <Pie
              data={data}
              dataKey="value"
              innerRadius={60}
              nameKey="name"
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        dominantBaseline="middle"
                        textAnchor="middle"
                        x={viewBox.cx}
                        y={viewBox.cy}
                      >
                        <tspan
                          className="fill-foreground font-bold text-3xl"
                          x={viewBox.cx}
                          y={viewBox.cy}
                        >
                          ~{hours}
                        </tspan>
                        <tspan
                          className="fill-muted-foreground"
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                        >
                          Hours
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
            <ChartLegend
              className="-translate-y-2 flex-wrap gap-2"
              content={<ChartLegendContent nameKey="name" />}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
