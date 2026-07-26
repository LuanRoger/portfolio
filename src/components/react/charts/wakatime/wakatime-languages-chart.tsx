import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/react/ui/card";
import {
  Legend,
  LegendItem,
  type LegendItemData,
  LegendLabel,
  LegendMarker,
} from "../base/legend";
import PieCenter from "../base/pie-chart/pie-center";
import PieChart from "../base/pie-chart/pie-chart";
import type { PieData } from "../base/pie-chart/pie-context";
import PieSlice from "../base/pie-chart/pie-slice";

interface LanguageChartData {
  data: {
    name: string;
    value: number;
    fill?: string;
  }[];
}

export default function WakatimeLanguagesChart({ data }: LanguageChartData) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const chartData: PieData[] & LegendItemData[] = data.map((item) => ({
    color: item.fill ?? "var(--chart-1)",
    fill: item.fill,
    label: item.name,
    value: item.value,
  }));

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Languages</CardTitle>
        <CardDescription>
          How many hours I spent on each language in the last 7 days
        </CardDescription>
      </CardHeader>
      <CardContent className="mx-auto flex w-full flex-col items-center justify-center">
        <PieChart
          data={chartData}
          hoveredIndex={hoveredIndex}
          innerRadius={90}
          onHoverChange={setHoveredIndex}
          size={280}
        >
          {chartData.map((_, index) => (
            <PieSlice index={index} key={index} />
          ))}
          <PieCenter
            formatOptions={{}}
            suffix=" hours"
            valueClassName="text-2xl font-bold"
          />
        </PieChart>
        <Legend
          className="flex w-full flex-row flex-wrap items-center justify-center"
          hoveredIndex={hoveredIndex}
          items={chartData}
          onHoverChange={setHoveredIndex}
        >
          <LegendItem className="flex flex-row items-center gap-1">
            <LegendMarker className="h-2 w-2" />
            <LegendLabel className="text-xs" />
          </LegendItem>
        </Legend>
      </CardContent>
    </Card>
  );
}
