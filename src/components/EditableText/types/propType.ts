import { type SxProps, type Theme } from "@mui/material";

export interface EditableTextProps {
  value: string;
  onChange?: (value: string) => void;
  fontFamily?: string;
  fontSize?: string | number;
  fontWeight?: number | string;
  fontStyle?: "normal" | "italic";
  color?: string | ((theme: Theme) => string);
  normalColor?: string | ((theme: Theme) => string);
  focusedColor?: string | ((theme: Theme) => string);
  placeholderColor?: string | ((theme: Theme) => string);
  letterSpacing?: string;
  lineHeight?: number | string;

  placeholder?: string;
  sx?: SxProps<Theme>;

  /**
   * Enables multiline editing
   */
  multiline?: boolean;

  /**
   * Makes field take full width
   */
  fullWidth?: boolean;

  /**
   * Used only in single line mode
   */
  minWidth?: string | number;

  /**
   * Used only in single line mode
   */
  maxWidth?: string | number;

  /**
   * Minimum rows for multiline
   */
  minRows?: number;

  /**
   * Maximum rows for multiline
   */
  maxRows?: number;

  disabled?: boolean;
}
