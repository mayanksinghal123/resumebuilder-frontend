import { Controller, type FieldValues } from "react-hook-form";
import EditableText from "../EditableText/EditableText";
import type { EditableTextControllerProps } from "./types/propType";

const EditableTextController = <TFieldValues extends FieldValues>({
  name,
  control,
  ...rest
}: EditableTextControllerProps<TFieldValues>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <EditableText
          {...rest}
          value={field.value ?? ""}
          onChange={field.onChange}
        />
      )}
    />
  );
};

export default EditableTextController;
