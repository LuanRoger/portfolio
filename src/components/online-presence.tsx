import Dot from "./dot";
import { Badge } from "./ui/badge";

export default function OnlinePresence() {
  return (
    <Badge className="inline-flex gap-1 space-y-2 rounded-full bg-green-500 dark:text-foreground">
      <Dot animate />
      Online
    </Badge>
  );
}
