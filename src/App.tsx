import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { getSession, setUser } from "./store/authSlice";
import { useAppDispatch } from "./store/hooks";
import { supabase } from "./lib/supabase";
import { router } from "./routes/routers";
import AuthDialog from "./pages/Auth/AuthDialog";
export default function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(getSession());
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_, session) =>
      dispatch(setUser(session?.user ?? null)),
    );
    return () => subscription.unsubscribe();
  }, [dispatch]);
  return (
    <>
      <RouterProvider router={router} />
      <AuthDialog />
    </>
  );
}
