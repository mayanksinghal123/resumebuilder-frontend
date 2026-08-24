import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}
export function Input({
  label,
  error,
  id,
  className = "",
  ...props
}: InputProps) {
  const inputId = id ?? props.name;
  return (
    <label
      className="flex w-full flex-col gap-1.5 text-sm font-medium text-foreground"
      htmlFor={inputId}
    >
      {label && (
        <span>
          {label}
          {props.required && (
            <span className="ml-1 text-error" aria-hidden="true">
              *
            </span>
          )}
        </span>
      )}
      <input
        id={inputId}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className={`rounded-md border border-input bg-card px-3 py-2 text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30 disabled:opacity-50 ${className}`}
        {...props}
      />
      {error && (
        <span id={`${inputId}-error`} className="text-xs text-error">
          {error}
        </span>
      )}
    </label>
  );
}
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}
export function Textarea({
  label,
  error,
  id,
  className = "",
  ...props
}: TextareaProps) {
  const inputId = id ?? props.name;
  return (
    <label
      className="flex w-full flex-col gap-1.5 text-sm font-medium text-foreground"
      htmlFor={inputId}
    >
      {label && (
        <span>
          {label}
          {props.required && (
            <span className="ml-1 text-error" aria-hidden="true">
              *
            </span>
          )}
        </span>
      )}
      <textarea
        id={inputId}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className={`rounded-md border border-input bg-card px-3 py-2 text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30 disabled:opacity-50 ${className}`}
        {...props}
      />
      {error && (
        <span id={`${inputId}-error`} className="text-xs text-error">
          {error}
        </span>
      )}
    </label>
  );
}
