import type { Transition } from "motion/react";
import {
  createContext,
  type ReactNode,
  type RefObject,
  useContext,
  useMemo,
} from "react";

// CSS variable references for pie chart theming
export const pieCssVars = {
  background: "var(--chart-background)",
  foreground: "var(--chart-foreground)",
  foregroundMuted: "var(--chart-foreground-muted)",
  label: "var(--chart-label)",
  // Default slice colors from chart palette
  slice1: "var(--chart-1)",
  slice2: "var(--chart-2)",
  slice3: "var(--chart-3)",
  slice4: "var(--chart-4)",
  slice5: "var(--chart-5)",
};

// Default slice color palette
export const defaultPieColors = [
  pieCssVars.slice1,
  pieCssVars.slice2,
  pieCssVars.slice3,
  pieCssVars.slice4,
  pieCssVars.slice5,
];

export interface PieData {
  /** Optional color override - falls back to palette */
  color?: string;
  /** Optional fill override for patterns/gradients (e.g., "url(#patternId)") */
  fill?: string;
  /** Display label for the slice */
  label: string;
  /** Value for the slice (determines slice size relative to total) */
  value: number;
}

/** Arc data computed by visx Pie */
export interface PieArcData {
  data: PieData;
  endAngle: number;
  index: number;
  padAngle: number;
  startAngle: number;
  value: number;
}

export interface PieHoverContextValue {
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}

export interface PieStableContextValue {
  // Animation state
  animationKey: number;
  arcs: PieArcData[];
  center: number;

  // Container ref for portals
  containerRef: RefObject<HTMLDivElement | null>;
  cornerRadius: number;
  // Data
  data: PieData[];
  enterStaggerScale: number;
  enterTransition?: Transition;

  /**
   * Studio geometry scrub — skip Motion path morphing and use plain SVG paths.
   * @default false
   */
  geometryScrubbing: boolean;

  // Get color for a slice index
  getColor: (index: number) => string;

  // Get fill for a slice index (supports patterns/gradients)
  getFill: (index: number) => string;

  // Hover effect
  hoverOffset: number;
  innerRadius: number;
  isLoaded: boolean;
  outerRadius: number;
  padAngle: number;

  /** Precomputed slice paths during geometry scrub (one per arc). */
  scrubSlicePaths: readonly string[] | null;

  // Dimensions
  size: number;

  // Computed values
  totalValue: number;
}

export type PieContextValue = PieStableContextValue & PieHoverContextValue;

const PieStableContext = createContext<PieStableContextValue | null>(null);
const PieHoverContext = createContext<PieHoverContextValue | null>(null);

export function PieProvider({
  children,
  value,
}: {
  children: ReactNode;
  value: PieContextValue;
}) {
  const stable = useMemo<PieStableContextValue>(
    () => ({
      animationKey: value.animationKey,
      arcs: value.arcs,
      center: value.center,
      containerRef: value.containerRef,
      cornerRadius: value.cornerRadius,
      data: value.data,
      enterStaggerScale: value.enterStaggerScale,
      enterTransition: value.enterTransition,
      geometryScrubbing: value.geometryScrubbing,
      getColor: value.getColor,
      getFill: value.getFill,
      hoverOffset: value.hoverOffset,
      innerRadius: value.innerRadius,
      isLoaded: value.isLoaded,
      outerRadius: value.outerRadius,
      padAngle: value.padAngle,
      scrubSlicePaths: value.scrubSlicePaths,
      size: value.size,
      totalValue: value.totalValue,
    }),
    [
      value.data,
      value.arcs,
      value.size,
      value.center,
      value.outerRadius,
      value.innerRadius,
      value.padAngle,
      value.cornerRadius,
      value.hoverOffset,
      value.animationKey,
      value.isLoaded,
      value.enterTransition,
      value.enterStaggerScale,
      value.containerRef,
      value.totalValue,
      value.getColor,
      value.getFill,
      value.geometryScrubbing,
      value.scrubSlicePaths,
    ]
  );

  const hover = useMemo<PieHoverContextValue>(
    () => ({
      hoveredIndex: value.hoveredIndex,
      setHoveredIndex: value.setHoveredIndex,
    }),
    [value.hoveredIndex, value.setHoveredIndex]
  );

  return (
    <PieStableContext.Provider value={stable}>
      <PieHoverContext.Provider value={hover}>
        {children}
      </PieHoverContext.Provider>
    </PieStableContext.Provider>
  );
}

export function usePieStable(): PieStableContextValue {
  const context = useContext(PieStableContext);
  if (!context) {
    throw new Error(
      "usePieStable must be used within a PieProvider. " +
        "Make sure your component is wrapped in <PieChart>."
    );
  }
  return context;
}

export function usePieHover(): PieHoverContextValue {
  const context = useContext(PieHoverContext);
  if (!context) {
    throw new Error(
      "usePieHover must be used within a PieProvider. " +
        "Make sure your component is wrapped in <PieChart>."
    );
  }
  return context;
}

export function usePie(): PieContextValue {
  return { ...usePieStable(), ...usePieHover() };
}

export default PieStableContext;
