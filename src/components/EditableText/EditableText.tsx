import { TextField, useMediaQuery, useTheme } from "@mui/material";
import { useRef, useState, useLayoutEffect } from "react";
import type { EditableTextProps } from "./types/propType";
import EditableTextDialog from "../EditableTextDialog/EditableTextDialog";

const EditableText: React.FC<EditableTextProps> = ({
  value,
  onChange,
  fontFamily,
  fontSize = 16,
  fontWeight = 400,
  fontStyle = "normal",
  color,
  normalColor,
  focusedColor,
  placeholderColor,
  letterSpacing,
  lineHeight,
  placeholder = "Type here...",
  sx,
  multiline = false,
  fullWidth = false,
  minWidth = "100px",
  maxWidth = "400px",
  minRows = 1,
  maxRows,
  disabled = false,
}) => {
  const isEditable = !!onChange && !disabled;
  const mirrorRef = useRef<HTMLSpanElement>(null);

  const [inputWidth, setInputWidth] = useState<number>(10);
  const [open, setOpen] = useState<boolean>(false);
  const [dialogValue, setDialogValue] = useState<string>(value);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const sharedFontStyles: React.CSSProperties = {
    fontFamily,
    fontSize: typeof fontSize === "number" ? `${fontSize}px` : fontSize,
    fontWeight: fontWeight as React.CSSProperties["fontWeight"],
    fontStyle,
    letterSpacing,
    lineHeight: lineHeight as React.CSSProperties["lineHeight"],
  };

  useLayoutEffect(() => {
    if (multiline) return;

    if (mirrorRef.current) {
      setInputWidth(Math.max(mirrorRef.current.offsetWidth + 2, 10));
    }
  }, [
    value,
    fontFamily,
    fontSize,
    fontWeight,
    fontStyle,
    letterSpacing,
    multiline,
  ]);

  const handleSave = () => {
    onChange?.(dialogValue);
    setOpen(false);
  };

  const handleOpen = () => {
    if (!isEditable || !isMobile) return;

    setDialogValue(value);
    setOpen(true);
  };

  return (
    <>
      {!multiline && (
        <span
          ref={mirrorRef}
          aria-hidden
          style={{
            ...sharedFontStyles,
            position: "absolute",
            visibility: "hidden",
            whiteSpace: "pre",
            pointerEvents: "none",
          }}
        >
          {value || placeholder || " "}
        </span>
      )}

      <TextField
        variant="standard"
        multiline={multiline}
        fullWidth={fullWidth}
        minRows={multiline ? minRows : undefined}
        maxRows={multiline ? maxRows : undefined}
        disabled={disabled}
        value={value}
        placeholder={placeholder}
        onClick={isMobile ? handleOpen : undefined}
        onChange={isMobile ? undefined : (e) => onChange?.(e.target.value)}
        slotProps={{
          htmlInput: {
            spellCheck: false,
            readOnly: isMobile ? true : !isEditable,
          },
        }}
        sx={[
          (theme) => ({
            width: fullWidth ? "100%" : "auto",
            color: theme.documentColors.black,
            "& .MuiInputBase-root": {
              alignItems: multiline ? "flex-start" : "center",
              color: "inherit",
              borderRadius: "6px",
              transition: "all 0.2s ease",
              padding: 0,
              height: "unset",
              position: "relative",
              transformOrigin: "center center",
              cursor: isEditable ? "pointer" : "default",

              ...(isEditable && {
                "&:hover": {
                  cursor: "pointer",
                  boxShadow: theme.shadows[1],
                  backgroundColor: theme.palette.background.hover_bg,
                  // outline: `1px dashed ${theme.palette.background.hover_border}`,

                  "& .MuiInputBase-input": {
                    color: focusedColor ?? normalColor ?? color ?? "inherit",
                  },
                },

                ...(!isMobile && {
                  "&.Mui-focused": {
                    cursor: "text",
                    // boxShadow: theme.shadows[3],
                    backgroundColor: theme.palette.background.focused_bg,
                    // transform: "scaleX(1.04) scaleY(1.25)",
                    // outline: `1.5px dashed ${theme.palette.background.hover_border}`,
                    paddingBottom: 1,
                    zIndex: 20,
                  },

                  "&.Mui-focused .MuiInputBase-input": {
                    color: focusedColor ?? normalColor ?? color ?? "inherit",
                  },

                  "&.Mui-focused input, &.Mui-focused textarea": {
                    cursor: "text",
                  },
                }),
              }),
            },

            "& .MuiInputBase-input": {
              padding: "2px 6px",
              textAlign: "left",
              ...sharedFontStyles,
              cursor: isEditable ? "pointer" : "default",
              color: normalColor ?? color ?? "inherit",

              "&::placeholder": {
                color: placeholderColor ?? "inherit",
              },

              ...(multiline
                ? {
                    width: "100%",
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                    overflowWrap: "break-word",
                    lineHeight: lineHeight || 1.2,
                  }
                : {
                    width: `${inputWidth}px`,
                    minWidth,
                    maxWidth,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }),
            },

            "& textarea": {
              resize: "none",
            },

            "& .MuiInput-underline:before": {
              borderBottom: "none",
            },

            "& .MuiInput-underline:after": {
              borderBottom: "none",
            },

            "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
              borderBottom: "none",
            },
          }),
          ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
        ]}
      />
      <EditableTextDialog
        open={open}
        value={dialogValue}
        multiline={multiline}
        minRows={minRows}
        maxRows={maxRows}
        placeholder={placeholder}
        onChange={setDialogValue}
        onClose={() => setOpen(false)}
        onSave={handleSave}
      />
    </>
  );
};

export default EditableText;
