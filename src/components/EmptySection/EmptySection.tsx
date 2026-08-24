import { Plus } from "lucide-react";
export default function EmptySection({
  label = "Add item",
  onClick,
}: {
  label?: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="my-6 flex w-full flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-border py-5 text-sm text-muted-foreground transition hover:border-foreground hover:bg-surface-muted hover:text-foreground"
    >
      <Plus size={18} />
      {label}
    </button>
  );
}
