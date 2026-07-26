import { createContext, useContext } from "react";

// CSS variable references for legend theming
export const legendCssVars = {
  background: "var(--legend)",
  foreground: "var(--legend-foreground)",
  muted: "var(--legend-muted)",
  mutedForeground: "var(--legend-muted-foreground)",
  track: "var(--legend-track)",
};

export interface LegendItemData {
  /** Item color */
  color: string;
  /** Display label */
  label: string;
  /** Maximum value (for progress/percentage calculation) */
  maxValue?: number;
  /** Current value */
  value: number;
}

export interface LegendContextValue {
  /** Currently hovered index */
  hoveredIndex: number | null;
  /** All legend items */
  items: LegendItemData[];
  /** Set hovered index */
  setHoveredIndex: (index: number | null) => void;
}

export interface LegendItemContextValue {
  /** Index of this item */
  index: number;
  /** Whether this item is faded (another item is hovered) */
  isFaded: boolean;
  /** Whether this item is hovered */
  isHovered: boolean;
  /** The current item data */
  item: LegendItemData;
  /** Percentage value (value / maxValue * 100) */
  percentage: number;
}

const LegendContext = createContext<LegendContextValue | null>(null);
const LegendItemContext = createContext<LegendItemContextValue | null>(null);

export function LegendProvider({
  children,
  value,
}: {
  children: React.ReactNode;
  value: LegendContextValue;
}) {
  return (
    <LegendContext.Provider value={value}>{children}</LegendContext.Provider>
  );
}

export function LegendItemProvider({
  children,
  value,
}: {
  children: React.ReactNode;
  value: LegendItemContextValue;
}) {
  return (
    <LegendItemContext.Provider value={value}>
      {children}
    </LegendItemContext.Provider>
  );
}

export function useLegend(): LegendContextValue {
  const context = useContext(LegendContext);
  if (!context) {
    throw new Error("useLegend must be used within a <Legend> component.");
  }
  return context;
}

export function useLegendItem(): LegendItemContextValue {
  const context = useContext(LegendItemContext);
  if (!context) {
    throw new Error(
      "useLegendItem must be used within a <LegendItem> component."
    );
  }
  return context;
}
