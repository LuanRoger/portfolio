import Dot from "@/components/dot";
import type { Presence } from "@/types/presence";
import { cn } from "@/utils/shadcn-utils";

type ActivityDialogHeaderProps = {
  status: Presence;
};

export default function ActivityDialogHeader({
  status,
}: ActivityDialogHeaderProps) {
  return (
    <div
      className={cn(
        "inset-shadow-xs flex w-full items-center justify-center gap-1 rounded-t-md px-2 py-1 font-semibold text-sm text-white",
        {
          "inset-shadow-green-700 bg-green-500": status === "online",
          "inset-shadow-gray-700 rounded-b-md bg-gray-500":
            status === "offline",
        }
      )}
    >
      <Dot
        animate={status === "online"}
        dotClassName={cn({
          "bg-green-400": status === "online",
          "bg-gray-400": status === "offline",
        })}
      />
      {status.toString()}
    </div>
  );
}
