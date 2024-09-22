import QuickContactDialog from "@/components/quick-contact-dialog";
import Name from "./name";

export default function NameHeader() {
  return (
    <header>
      <div className="flex flex-row justify-between">
        <Name />
        <QuickContactDialog />
      </div>
      <h2 className="font-mono text-sm">Full-stack developper</h2>
    </header>
  );
}
