import { CheckCircle2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useTemplate } from "../../hooks/useTemplate";
import { setTemplate } from "../../store/templateSlice";
import type { ResumeTemplate } from "../../api/services/types";
import type { RootState } from "../../store";
export default function TemplateList({
  onSelectMobile,
}: {
  onSelectMobile?: () => void;
}) {
  const { data: templates, isLoading, error } = useTemplate();
  const dispatch = useDispatch();
  const selectedTemplate = useSelector(
    (state: RootState) => state.template.activeTemplateKey,
  );
  return (
    <aside className="w-full shrink-0 overflow-y-auto border-l border-border bg-card p-5 md:w-80">
      <h2 className="text-lg font-bold">Templates</h2>
      <p className="mb-5 mt-1 text-sm text-muted-foreground">
        Click a template to restyle your resume.
      </p>
      {error && <p className="text-sm text-error">Failed to load templates</p>}
      {isLoading && (
        <div className="space-y-3">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="h-48 animate-pulse rounded-lg bg-muted"
            />
          ))}
        </div>
      )}
      <div className="space-y-4">
        {templates?.map((template: ResumeTemplate) => {
          const selected = selectedTemplate === template.key;
          return (
            <button
              type="button"
              key={template.id}
              onClick={() => {
                dispatch(setTemplate(template.key));
                onSelectMobile?.();
              }}
              className={`relative w-full overflow-hidden rounded-lg border text-left transition hover:-translate-y-0.5 hover:shadow-md ${selected ? "border-success ring-4 ring-success/15" : "border-border"}`}
            >
              <img
                src={template.thumbnail_url}
                alt={template.name}
                className="aspect-[3/4] w-full object-cover"
              />
              <div className="p-3 text-sm font-semibold">{template.name}</div>
              {selected && (
                <CheckCircle2
                  className="absolute right-3 top-3 rounded-full bg-card text-success"
                  size={25}
                />
              )}
            </button>
          );
        })}
      </div>
    </aside>
  );
}
