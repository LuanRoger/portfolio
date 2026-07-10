import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PieChart from "../base/pie-chart/pie-chart";
import PieSlice from "../base/pie-chart/pie-slice";
import type { PieData } from "../base/pie-chart/pie-context";
import PieCenter from "../base/pie-chart/pie-center";
import {
  Legend,
  LegendItem,
  LegendLabel,
  LegendMarker,
  type LegendItemData,
} from "../base/legend";
import { useState } from "react";

type LanguageChartData = {
  data: {
    name: string;
    value: number;
    fill?: string;
  }[];
};

export default function WakatimeLanguagesChart({ data }: LanguageChartData) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const chartData: PieData[] & LegendItemData[] = data.map((item) => ({
    label: item.name,
    value: item.value,
    color: item.fill ?? "var(--chart-1)",
    fill: item.fill,
  }));

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Languages</CardTitle>
        <CardDescription>
          How many hours I spent on each language in the last 7 days
        </CardDescription>
      </CardHeader>
      <CardContent className="mx-auto w-full flex flex-col items-center justify-center">
        <PieChart
          data={chartData}
          size={280}
          innerRadius={90}
          hoveredIndex={hoveredIndex}
          onHoverChange={setHoveredIndex}
        >
          {chartData.map((_, index) => (
            <PieSlice key={index} index={index} />
          ))}
          <PieCenter
            suffix=" hours"
            valueClassName="text-2xl font-bold"
            formatOptions={{}}
          />
        </PieChart>
        <Legend
          items={chartData}
          className="flex flex-row flex-wrap justify-center items-center w-full"
          hoveredIndex={hoveredIndex}
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
