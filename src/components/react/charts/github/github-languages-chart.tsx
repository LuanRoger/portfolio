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
import PieChart from "../base/pie-chart/pie-chart";
import type { PieData } from "../base/pie-chart/pie-context";
import PieSlice from "../base/pie-chart/pie-slice";

type GithubLanguagesMetricsChartProps = {
  data: PieData[] & LegendItemData[];
};

export default function GithubLanguagesMetricsChart({
  data,
}: GithubLanguagesMetricsChartProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Languages</CardTitle>
        <CardDescription>
          Distribution of programming languages used in my last updated
          repositories.
        </CardDescription>
      </CardHeader>
      <CardContent className="mx-auto flex w-full flex-col items-center justify-center">
        <PieChart
          data={data}
          hoveredIndex={hoveredIndex}
          onHoverChange={setHoveredIndex}
          size={280}
        >
          {data.map((_, index) => (
            <PieSlice index={index} key={index} />
          ))}
        </PieChart>
        <Legend
          className="flex w-full flex-row flex-wrap items-center justify-center"
          hoveredIndex={hoveredIndex}
          items={data}
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
