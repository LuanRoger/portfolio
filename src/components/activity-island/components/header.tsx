import Dot from "@/components/dot";

export default function ActivityDialogHeader() {
  return (
    <div className="inset-shadow-green-700 inset-shadow-xs flex w-full items-center justify-center gap-1 rounded-t-md bg-green-500 p-1 font-semibold text-sm text-white">
      <Dot animate />
      online
    </div>
  );
}
