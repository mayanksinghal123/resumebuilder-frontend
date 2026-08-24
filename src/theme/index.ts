import { createTheme } from "@mui/material/styles";
import { palette } from "./palette";
import { getShadows } from "./shadow";


export const getTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,

      primary: {
        main: palette[mode].primary,
      },

      secondary: {
        main: palette[mode].secondary,
      },

      background: palette[mode].background,

      text: palette[mode].text,
    },
    documentColors: palette.shared,
    shape: {
      borderRadius: 8,
    },
    shadows: getShadows(mode),
  });