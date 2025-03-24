import { getWakatimeLastDaysCategoriesSummary } from "@/app/actions/wakatime";
import { formatDateAsHumanReadable } from "@/utils/time";
import WakatimeSummaryCategoriesChart from "./client";

export default async function WakatimeSummaryCategories() {
  const daysSummary = await getWakatimeLastDaysCategoriesSummary();
  if (!daysSummary) {
    return <div className="text-center">No data available</div>;
  }

  const categoriesChart = daysSummary.map((category) => ({
    day: formatDateAsHumanReadable(category.date),
    codingHours: category.coding?.hours || 0,
    debuggingHours: category.debugging?.hours || 0,
  }));

  return <WakatimeSummaryCategoriesChart data={categoriesChart} />;
}
