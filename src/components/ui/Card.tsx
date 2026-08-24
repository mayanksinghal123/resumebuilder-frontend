import type { HTMLAttributes, ReactNode } from "react";
interface CardProps extends HTMLAttributes<HTMLDivElement> { children: ReactNode; }
export function Card({ children, className = "", ...props }: CardProps) { return <div className={`rounded-lg border border-border bg-card text-card-foreground shadow-sm ${className}`} {...props}>{children}</div>; }
