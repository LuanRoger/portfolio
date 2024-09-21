import QuickContactDialog from "@/components/quick-contact-dialog";

export default function NameHeader() {
  return (
    <header>
      <div className="flex flex-row justify-between">
        <h1 className="font-bold text-2xl">Luan Roger</h1>
        <QuickContactDialog />
      </div>
      <h2 className="font-mono text-sm">Full-stack developper</h2>
    </header>
  );
}
