import { getWakatimeAllTimeMetrics } from "@/app/actions/wakatime";
import WakatimeAllTimeChart from "./client";

export default async function WakatimeAllTime() {
  const allTimeMetrics = await getWakatimeAllTimeMetrics();
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
