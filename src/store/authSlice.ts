import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { User } from "@supabase/supabase-js";
import { supabase } from "../lib/supabase";

interface AuthState {
  user: User | null;
  loading: boolean;
  loginDialogOpen: boolean;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  loginDialogOpen: false,
};

export const getSession = createAsyncThunk("auth/getSession", async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return session?.user ?? null;
});

export const signInWithGoogle = createAsyncThunk(
  "auth/google",
  async (_, { rejectWithValue }) => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/dashboard`,
      },
    });

    if (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const signUpWithEmail = createAsyncThunk(
  "auth/signup",
  async (
    {
      email,
      password,
    }: {
      email: string;
      password: string;
    },
    { rejectWithValue },
  ) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const signInWithEmail = createAsyncThunk(
  "auth/login",
  async (
    {
      email,
      password,
    }: {
      email: string;
      password: string;
    },
    { rejectWithValue },
  ) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const logout = createAsyncThunk("auth/logout", async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User | null>) {
      state.user = action.payload;
    },

    openLoginDialog(state) {
      state.loginDialogOpen = true;
    },

    closeLoginDialog(state) {
      state.loginDialogOpen = false;
    },
  },

  extraReducers: (builder) => {
    builder
      // Session
      .addCase(getSession.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSession.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getSession.rejected, (state) => {
        state.loading = false;
      })

      // Email Login
      .addCase(signInWithEmail.pending, (state) => {
        state.loading = true;
      })
      .addCase(signInWithEmail.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(signInWithEmail.rejected, (state) => {
        state.loading = false;
      })

      // Signup
      .addCase(signUpWithEmail.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUpWithEmail.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(signUpWithEmail.rejected, (state) => {
        state.loading = false;
      })

      // Google Login
      .addCase(signInWithGoogle.pending, (state) => {
        state.loading = true;
      })
      .addCase(signInWithGoogle.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(signInWithGoogle.rejected, (state) => {
        state.loading = false;
      })

      // Logout
      .addCase(logout.pending, (state) => {
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
      })
      .addCase(logout.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setUser, openLoginDialog, closeLoginDialog } = authSlice.actions;

export default authSlice.reducer;
