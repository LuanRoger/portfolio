import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/react/ui/card";

interface WakatimeRawMetricsProps {
  allTimeText: string;
  avarengeText: string;
}

export default function WakatimeRawMetrics({
  avarengeText,
  allTimeText,
}: WakatimeRawMetricsProps) {
  return (
    <div className="flex justify-between gap-2">
      <Card className="flex-1">
        <CardHeader>
          <CardTitle>Total time coding</CardTitle>
        </CardHeader>
        <CardContent>
          <span className="font-bold text-2xl">{allTimeText}</span>
        </CardContent>
      </Card>
      <Card className="flex-1">
        <CardHeader>
          <CardTitle>Daily average</CardTitle>
        </CardHeader>
        <CardContent>
          <span className="font-bold text-2xl">{avarengeText}</span>
        </CardContent>
      </Card>
    </div>
  );
}
