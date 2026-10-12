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
  const canDelete = showDelete && Boolean(onDelete);

  return (
    <div
      className={`
        group
        relative
        rounded-md
        border
        border-transparent
        transition-colors
        duration-150
        ease-out
        ${className}
      `}
    >
      {canDelete && (
        <div
          className="
            absolute
            -top-9
            right-0
            z-20
            flex
            items-center
            rounded-md
            border
            border-slate-200
            bg-white
            p-0.5
            shadow-sm
            opacity-0
            transition-opacity
            duration-150
            group-hover:opacity-100
            group-focus-within:opacity-100
          "
        >
          <button
            type="button"
            aria-label="Delete item"
            onClick={onDelete}
            className="
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded
              text-slate-500
              transition-colors
              duration-150
              hover:bg-red-50
              hover:text-red-600
              focus-visible:outline-2
              focus-visible:outline-[var(--ring)]
              focus-visible:outline-offset-1
            "
          >
            <Trash2 size={14} strokeWidth={1.8} />
          </button>
        </div>
      )}

      {children}
    </div>
  );
}
