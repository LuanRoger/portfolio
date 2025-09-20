import ActivitiesDialog, {
  ActivitiesDialogLoading,
} from "@/components/activities-dialog";
import Name from "./name";
import { Suspense } from "react";

export default function NameHeader() {
  return (
    <header>
      <div className="flex flex-row justify-between">
        <Name />
        <Suspense fallback={<ActivitiesDialogLoading />}>
          <ActivitiesDialog />
        </Suspense>
      </div>
      <p className="font-mono text-sm">Full-stack developer</p>
    </header>
  );
}
