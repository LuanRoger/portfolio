import ActivitiesDialog from "@/components/activities-dialog";
import Name from "./name";
import RoleTitle from "./role-title";

export default function NameHeader() {
  return (
    <header>
      <div className="flex flex-row justify-between">
        <Name />
        <ActivitiesDialog />
      </div>
      <RoleTitle />
    </header>
  );
}
