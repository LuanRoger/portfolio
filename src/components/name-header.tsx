import ActivitiesDialog, {
  ActivitiesDialogLoading,
} from "@/components/activities-dialog";
import { Suspense } from "react";

export default function NameHeader() {
  return (
    <header>
      <div className="flex flex-row justify-between">
        <h1 className="cursor-default text-4xl font-bold transition-transform hover:scale-105">
          Luan Roger
        </h1>
        <Suspense fallback={<ActivitiesDialogLoading />}>
          <ActivitiesDialog />
        </Suspense>
      </div>
      <p className="font-mono text-sm">Full-stack developer</p>
    </header>
  );
}
