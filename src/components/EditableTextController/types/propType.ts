import type { Control, FieldPath, FieldValues } from "react-hook-form";
import type { EditableTextProps } from "../../EditableText/types/editable-text.types";
export interface EditableTextControllerProps<
  TFieldValues extends FieldValues,
> extends Omit<EditableTextProps, "value" | "onChange"> {
  name: FieldPath<TFieldValues>;
  control: Control<TFieldValues>;
}
