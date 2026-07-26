import { cn } from "@/lib/cn";
import { intFmt } from "~/src/lib/utils/formatters";
import { useLegendItem } from "./legend-context";

export interface LegendValueProps {
  /** Value class name. Default: "text-sm tabular-nums" */
  className?: string;
  /** Format function for percentage. Default: (p) => `${p.toFixed(0)}%` */
  formatPercentage?: (percentage: number) => string;
  /** Format function for the value. Default: toLocaleString() */
  formatValue?: (value: number) => string;
  /** Percentage class name. Default: "text-xs tabular-nums" */
  percentageClassName?: string;
  /** Show percentage alongside value. Default: false */
  showPercentage?: boolean;
}

export function LegendValue({
  className = "text-sm tabular-nums",
  showPercentage = false,
  percentageClassName = "text-xs tabular-nums",
  formatValue = intFmt,
  formatPercentage = (p) => `${p.toFixed(0)}%`,
}: LegendValueProps) {
  const { item, percentage } = useLegendItem();

  return (
    <span
      className={cn(
        "flex items-center gap-2 text-legend-muted-foreground",
        className
      )}
    >
      <span>{formatValue(item.value)}</span>
      {showPercentage && item.maxValue && (
        <span className={percentageClassName}>
          {formatPercentage(percentage)}
        </span>
      )}
    </span>
  );
}

LegendValue.displayName = "LegendValue";
