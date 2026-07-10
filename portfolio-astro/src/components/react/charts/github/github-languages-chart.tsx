import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/react/ui/card";
import type { PieData } from "../base/pie-chart/pie-context";
import { LegendItem, LegendMarker, LegendLabel, Legend, type LegendItemData } from "../base/legend";
import PieChart from "../base/pie-chart/pie-chart";
import { useState } from "react";
import PieSlice from "../base/pie-chart/pie-slice";

type GithubLanguagesMetricsChartProps = {
  data: PieData[] & LegendItemData[];
};

export default function GithubLanguagesMetricsChart({ data }: GithubLanguagesMetricsChartProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Languages</CardTitle>
        <CardDescription>
          Distribution of programming languages used in my last updated repositories.
        </CardDescription>
      </CardHeader>
      <CardContent className="mx-auto w-full flex flex-col items-center justify-center">
        <PieChart
          data={data}
          size={280}
          hoveredIndex={hoveredIndex}
          onHoverChange={setHoveredIndex}
        >
          {data.map((_, index) => (
            <PieSlice key={index} index={index} />
          ))}
        </PieChart>
        <Legend
          items={data}
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
  )
}
