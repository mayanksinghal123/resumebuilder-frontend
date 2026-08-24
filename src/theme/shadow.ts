import type { Shadows } from "@mui/material";

export const getShadows = (mode: "light" | "dark"): Shadows => {
  if (mode === "light") {
    return [
      "none",
      "0px 1px 2px rgba(0,0,0,0.05)",
      "0px 2px 6px rgba(0,0,0,0.08)",
      "0px 4px 12px rgba(0,0,0,0.12)",
      "0px 6px 18px rgba(0,0,0,0.16)",
      ...Array(20).fill("0px 8px 24px rgba(255,255,255,0.12)"),
    ] as Shadows;
  }

  return [
    "none",
    "0px 1px 2px rgba(255,255,255,0.04)",
    "0px 2px 6px rgba(255,255,255,0.06)",
    "0px 4px 12px rgba(255,255,255,0.08)",
    "0px 6px 18px rgba(255,255,255,0.10)",
    ...Array(20).fill("0px 8px 24px rgba(255,255,255,0.12)"),
  ] as Shadows;
};
