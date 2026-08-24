import "@mui/material/styles";
import type { palette } from "./palette";

type DocumentColors = typeof palette.shared;

declare module "@mui/material/styles" {
  interface TypeBackground {
    hover_bg: string;
    hover_border: string;
    border: string;
    surface: string;
    focused_bg: string;
  }
  interface TypeText {
    white: string;
    black: string;
  }
  interface Theme {
    documentColors: DocumentColors;
  }
  interface ThemeOptions {
    documentColors?: DocumentColors;
  }
}
