// hooks/useRequireAuth.ts

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { openLoginDialog } from "../store/authSlice";

export const useRequireAuth = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.auth.user);

  const requireAuth = (callback?: () => void) => {
    console.log("users__",user)
    if (!user) {
       
      dispatch(openLoginDialog());
      return;
    }

    callback?.();
  };

  return {
    requireAuth,
    isAuthenticated: !!user,
  };
};
