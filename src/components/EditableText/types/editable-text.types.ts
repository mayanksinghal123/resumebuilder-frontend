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
}