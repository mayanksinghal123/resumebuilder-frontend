import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "../../theme/useTheme";
export function ThemeToggle() { const { theme, setTheme } = useTheme(); const next = theme === "light" ? "dark" : theme === "dark" ? "system" : "light"; const Icon = theme === "light" ? Sun : theme === "dark" ? Moon : Monitor; return <button type="button" aria-label={`Switch to ${next} theme`} title={`Theme: ${theme}`} onClick={() => setTheme(next)} className="rounded-md p-2 text-muted-foreground transition hover:bg-surface-muted hover:text-foreground"><Icon size={19} /></button>; }
