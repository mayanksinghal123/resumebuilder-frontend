import { useAppDispatch, useAppSelector } from "../store/hooks";
import { openLoginDialog } from "../store/authSlice";
export const useRequireAuth = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const requireAuth = (callback?: () => void) => {
    if (!user) {
      dispatch(openLoginDialog());
      return;
    }
    callback?.();
  };
  return { requireAuth, isAuthenticated: !!user };
};
