import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";

import { getSession, setUser } from "./store/authSlice";
import { useAppDispatch } from "./store/hooks";
import { supabase } from "./lib/supabase";
import { router } from "./routes/routers";
import AuthDialog from "./pages/Auth/AuthDialog";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSession());
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_, session) => {
      dispatch(setUser(session?.user ?? null));
    });

    return () => subscription.unsubscribe();
  }, [dispatch]);

  return (
    <>
      <RouterProvider router={router} />
      <AuthDialog />
    </>
  );
}

export default App;
