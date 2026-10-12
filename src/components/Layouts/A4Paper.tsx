import type { ReactNode } from "react";
interface A4PaperProps {
  children: ReactNode;
  className?: string;
}
export default function A4Paper({ children, className = "" }: A4PaperProps) {
  return (
    <div
      className={`relative mx-auto min-h-[297mm] w-[210mm] shrink-0 overflow-hidden bg-resume-paper text-slate-900 shadow-lg print:m-0 print:shadow-none ${className}`}
    >
      {children}
    </div>
  );
}
