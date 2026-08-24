import type { User } from "@supabase/supabase-js";
import type { ReactNode } from "react";

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signUpWithEmail: (
    email: string,
    password: string
  ) => Promise<void>;
  signInWithEmail: (
    email: string,
    password: string
  ) => Promise<void>;
  logout: () => Promise<void>;
}

export interface AuthProviderProps {
  children: ReactNode;
}