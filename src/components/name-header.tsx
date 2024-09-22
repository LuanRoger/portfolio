import QuickContactDialog from "@/components/quick-contact-dialog";
import Name from "./name";
import RoleTitle from "./role-title";

export default function NameHeader() {
  return (
    <header>
      <div className="flex flex-row justify-between">
        <Name />
        <QuickContactDialog />
      </div>
      <RoleTitle />
    </header>
  );
}
