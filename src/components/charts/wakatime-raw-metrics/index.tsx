import {
  getWakatimeAllTimeMetrics,
  getWakatimeStats,
} from "@/app/actions/wakatime";
import WakatimeAllTimeChart from "./wakatime-all-time-chart";
import WakatimeDailyAverage from "./wakatime-daily-averange";

export default async function WakatimeRawMetrics() {
  const allTimeMetrics = await getWakatimeAllTimeMetrics();
  const statsData = await getWakatimeStats();

  if (!allTimeMetrics || !statsData) {
    return <div className="text-center">No data available</div>;
  }

  const { text: allTimeText } = allTimeMetrics;
  const { avarengeText } = statsData;
  return (
    <div className="flex gap-4 justify-between">
      <WakatimeAllTimeChart timeText={allTimeText} className="flex-1" />
      <WakatimeDailyAverage timeText={avarengeText} className="flex-1" />
    </div>
  );
}
