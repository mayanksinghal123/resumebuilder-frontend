import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material";

import { useMemo, useState, type ReactNode } from "react";
import { getTheme } from "../theme";

interface Props {
  children: ReactNode;
}

const ThemeProvider = ({ children }: Props) => {
  const [mode] = useState<"light" | "dark">("light");

  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />

      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;