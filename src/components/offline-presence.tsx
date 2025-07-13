import Dot from "./dot";
import { Badge } from "./ui/badge";

export default function OfflinePresence() {
  return (
    <Badge className="dark:text-foreground inline-flex gap-1 space-y-2 rounded-full bg-gray-500">
      <Dot dotClassName="bg-gray-400" />
      Offline
    </Badge>
  );
}
