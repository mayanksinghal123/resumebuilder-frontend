import { Trash2 } from "lucide-react";
import type { ReactNode } from "react";
interface EditableHoverCardProps {
  children: ReactNode;
  onDelete?: () => void;
  showDelete?: boolean;
  className?: string;
}
export default function EditableHoverCard({
  children,
  onDelete,
  showDelete = true,
  className = "",
}: EditableHoverCardProps) {
  return (
    <div
      className={`group relative rounded-md transition hover:bg-slate-50 hover:shadow-sm ${className}`}
    >
      {showDelete && onDelete && (
        <div className="absolute -right-1 -top-8 z-10 hidden group-hover:block">
          <button
            type="button"
            aria-label="Delete item"
            onClick={onDelete}
            className="rounded-md p-1.5 text-error hover:bg-error/10"
          >
            <Trash2 size={16} />
          </button>
        </div>
      )}
      {children}
    </div>
  );
}
