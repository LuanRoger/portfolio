import { getWakatimeStats } from "@/app/actions/wakatime";
import WakatimeLanguagesChart from "./client";

export default async function WakatimeLanguages() {
  const statsData = await getWakatimeStats();
  if (!statsData) {
    return <div className="text-center">No data available</div>;
  }

  const { totalInSeconds, languages } = statsData;
  const langaugeChart = languages.map((language) => ({
    name: language.name,
    value: language.percent,
    fill: language.metadata?.color,
  }));

  return (
    <WakatimeLanguagesChart
      data={langaugeChart}
      totalInSeconds={totalInSeconds}
    />
  );
}
