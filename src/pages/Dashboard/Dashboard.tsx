import { useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import ResumeEditor from "../ResumeEditor/ResumeEditor";
import TemplateList from "../../components/TemplateList/TemplateList";
import { Button } from "../../components/ui/Button";
export default function Dashboard() {
  const [templatesOpen, setTemplatesOpen] = useState(false);
  return (
    <div className="relative flex h-full overflow-hidden">
      <main className="min-w-0 flex-1 overflow-auto bg-surface-muted p-3 sm:p-6">
        <div className="mb-4 flex items-center justify-between md:hidden">
          <h1 className="text-lg font-bold">Resume editor</h1>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setTemplatesOpen(true)}
          >
            <SlidersHorizontal size={16} /> Templates
          </Button>
        </div>
        <ResumeEditor />
      </main>
      <div className="hidden md:block">
        <TemplateList />
      </div>
      {templatesOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <button
            type="button"
            aria-label="Close templates"
            className="absolute inset-0 h-full w-full bg-foreground/50"
            onClick={() => setTemplatesOpen(false)}
          />
          <aside className="absolute right-0 top-0 h-full w-80 max-w-[90vw] overflow-y-auto bg-card">
            <div className="flex justify-end p-3">
              <button
                type="button"
                aria-label="Close templates"
                onClick={() => setTemplatesOpen(false)}
              >
                <X size={20} />
              </button>
            </div>
            <TemplateList onSelectMobile={() => setTemplatesOpen(false)} />
          </aside>
        </div>
      )}
    </div>
  );
}
