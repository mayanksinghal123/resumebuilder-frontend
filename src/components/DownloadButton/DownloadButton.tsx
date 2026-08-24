import { Download, LoaderCircle } from "lucide-react";
import { Button, type ButtonVariant } from "../ui/Button";
interface DownloadButtonProps {
  loading?: boolean;
  label?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  className?: string;
  fullWidth?: boolean;
}
export default function DownloadButton({
  loading = false,
  label = "Download PDF",
  onClick,
  variant = "primary",
  className = "",
  fullWidth = false,
}: DownloadButtonProps) {
  return (
    <Button
      variant={variant}
      disabled={loading}
      onClick={onClick}
      className={`${fullWidth ? "w-full" : ""} ${className}`}
    >
      {loading ? (
        <LoaderCircle size={18} className="animate-spin" />
      ) : (
        <Download size={18} />
      )}
      {loading ? "Generating..." : label}
    </Button>
  );
}
