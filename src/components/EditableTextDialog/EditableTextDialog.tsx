import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";

interface EditableTextDialogProps {
  open: boolean;
  value: string;
  onChange: (value: string) => void;
  multiline?: boolean;
  minRows?: number;
  maxRows?: number;
  placeholder?: string;
  onClose: () => void;
  onSave: () => void;
}

const EditableTextDialog = ({
  open,
  value,
  onChange,
  multiline,
  minRows,
  maxRows,
  placeholder,
  onClose,
  onSave,
}: EditableTextDialogProps) => (
  <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
    <DialogContent>
      <TextField
        autoFocus
        fullWidth
        multiline={multiline}
        minRows={minRows}
        maxRows={maxRows}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </DialogContent>

    <DialogActions>
      <Button onClick={onClose}>Cancel</Button>
      <Button variant="contained" onClick={onSave}>
        Save
      </Button>
    </DialogActions>
  </Dialog>
);

export default EditableTextDialog;