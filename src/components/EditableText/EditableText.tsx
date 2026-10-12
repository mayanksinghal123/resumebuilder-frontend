import { useLayoutEffect, useRef } from "react";
import type { ChangeEvent } from "react";
import type { EditableTextProps } from "./types/editable-text.types";

const EditableText = ({
  value,
  onChange,
  placeholder = "Type here...",
  multiline = false,
  fullWidth = false,
  minRows = 1,
  maxRows,
  disabled = false,
  className = "",
}: EditableTextProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const isEditable = Boolean(onChange) && !disabled;

  useLayoutEffect(() => {
    if (!multiline || !textareaRef.current) {
      return;
    }

    const textarea = textareaRef.current;

    textarea.style.height = "auto";

    const styles = window.getComputedStyle(textarea);

    const lineHeight = parseFloat(styles.lineHeight) || 16;
    const paddingTop = parseFloat(styles.paddingTop) || 0;
    const paddingBottom = parseFloat(styles.paddingBottom) || 0;

    const padding = paddingTop + paddingBottom;

    const minHeight = lineHeight * Math.max(minRows, 1) + padding;

    const maxHeight = maxRows ? lineHeight * maxRows + padding : Infinity;

    const height = Math.min(
      Math.max(textarea.scrollHeight, minHeight),
      maxHeight,
    );

    textarea.style.height = `${height}px`;
    textarea.style.overflowY =
      textarea.scrollHeight > maxHeight ? "auto" : "hidden";
  }, [value, multiline, minRows, maxRows]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    onChange?.(event.target.value);
  };

  if (!isEditable) {
    return (
      <span
        className={`
          ${
            multiline
              ? "block whitespace-pre-wrap break-words"
              : "inline-block max-w-full whitespace-nowrap overflow-hidden text-ellipsis"
          }
          ${className}
        `}
      >
        {value || placeholder}
      </span>
    );
  }

  const baseClassName = `
  border
  border-transparent
  bg-transparent
  rounded-sm
  px-[6px]
  py-[2px]
  font-[inherit]
  leading-[inherit]
  tracking-[inherit]
  text-left

  cursor-pointer
  focus:cursor-text

  outline-none
  appearance-none
  ring-0
  shadow-none

  transition-colors
  duration-150
  ease-out

  hover:bg-[var(--editable-hover-bg,#f8fafc)]
  hover:border-dashed
  hover:border-[var(--editable-hover-border,#cbd5e1)]
  hover:text-[var(--editable-hover-text,currentColor)]

  focus:bg-[var(--editable-hover-bg,#f8fafc)]
  focus:border-solid
  focus:border-[var(--editable-hover-border,var(--ring))]
  focus:outline-none
  focus:ring-0
  focus:shadow-none

  placeholder:opacity-70

  disabled:cursor-not-allowed
  disabled:opacity-60
`;

  if (multiline) {
    return (
      <textarea
        ref={textareaRef}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        rows={minRows}
        disabled={disabled}
        spellCheck={false}
        aria-label={placeholder}
        className={`
          block
          ${fullWidth ? "w-full" : "w-auto max-w-full"}
          resize-none
          whitespace-pre-wrap
          break-words
          overflow-x-hidden
          ${baseClassName}
          ${className}
        `}
      />
    );
  }

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      disabled={disabled}
      spellCheck={false}
      aria-label={placeholder}
      className={`
        ${fullWidth ? "block w-full" : "inline-block max-w-full"}
        whitespace-nowrap
        overflow-hidden
        text-ellipsis
        ${baseClassName}
        ${className}
      `}
    />
  );
};

export default EditableText;
