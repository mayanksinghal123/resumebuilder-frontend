export interface EditableTextProps {
  value: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  multiline?: boolean;
  fullWidth?: boolean;
  minRows?: number;
  maxRows?: number;
  disabled?: boolean;
  className?: string;
  fontSize?: string | number;
  fontWeight?: number | string;
  fontStyle?: "normal" | "italic";
  color?: string;
  letterSpacing?: string;
  lineHeight?: number | string;
  minWidth?: string | number;
  maxWidth?: string | number;
}