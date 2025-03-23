import { getWakatimeAllTimeMetrics, getWakatimeStats } from "@/app/actions/wakatime";
import WakatimeAllTimeChart from "./wakatime-all-time-chart";

export default async function WakatimeRawMetrics() {
  const allTimeMetrics = await getWakatimeAllTimeMetrics();
  const stats = await getWakatimeStats
  if (!allTimeMetrics) {
    return <div className="text-center">No data available</div>;
  }

  const { text } = allTimeMetrics;
  return (
    <div className="flex gap-4">
      <WakatimeAllTimeChart hoursText={text} />
    </div>
  );
}
