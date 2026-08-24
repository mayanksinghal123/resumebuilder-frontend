export interface EditableTextProps {
  value: string;
  onChange?: (value: string) => void;
  fontFamily?: string;
  fontSize?: string | number;
  fontWeight?: number | string;
  fontStyle?: "normal" | "italic";
  color?: string;
  letterSpacing?: string;
  lineHeight?: number | string;
  placeholder?: string;
  className?: string;
  multiline?: boolean;
  fullWidth?: boolean;
  minWidth?: string | number;
  maxWidth?: string | number;
  minRows?: number;
  maxRows?: number;
  disabled?: boolean;
}
