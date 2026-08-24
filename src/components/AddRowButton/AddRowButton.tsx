import { Plus } from "lucide-react";
export default function AddRowButton({
  label = "Add More",
  onClick,
}: {
  label?: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mx-auto inline-flex w-fit items-center gap-1 rounded-md border border-dashed border-border px-3 py-2 text-sm text-muted-foreground transition hover:border-foreground hover:bg-surface-muted hover:text-foreground"
    >
      <Plus size={15} />
      {label}
    </button>
  );
}
