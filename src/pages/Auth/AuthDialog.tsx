import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { closeLoginDialog } from "../../store/authSlice";
import { Dialog } from "../../components/ui/Dialog";
import LoginForm from "./LoginForm";
export default function AuthDialog() {
  const dispatch = useAppDispatch();
  const { loginDialogOpen, user } = useAppSelector((state) => state.auth);
  useEffect(() => {
    if (user && loginDialogOpen) dispatch(closeLoginDialog());
  }, [dispatch, user, loginDialogOpen]);
  return (
    <Dialog
      open={loginDialogOpen}
      onClose={() => dispatch(closeLoginDialog())}
      title="Resume Builder"
      className="max-w-sm"
    >
      <div className="p-5">
        <LoginForm />
      </div>
    </Dialog>
  );
}
