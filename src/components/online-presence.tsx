import { Badge } from "./ui/badge";

export default function OnlinePresence() {
  return (
    <Badge className="inline-flex gap-1 space-y-2 border-green-700 bg-green-500 dark:text-foreground">
      <Dot />
      Online
    </Badge>
  );
}

function Dot() {
  return (
    <span className="relative flex h-3 w-3">
      <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
      <span className="bg-green-400 shadow-md rounded-full h-3 w-3" />
    </span>
  );
}
