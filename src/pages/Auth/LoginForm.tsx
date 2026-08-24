// src/components/auth/LoginForm.tsx

import { useState } from "react";
import {
  Alert,
  Button,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  signInWithEmail,
  signInWithGoogle,
  signUpWithEmail,
} from "../../store/authSlice";

const LoginForm = () => {
  const dispatch = useAppDispatch();

  const { loading } = useAppSelector((state) => state.auth);

  const [isSignup, setIsSignup] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setError("");

    try {
      if (isSignup) {
        await dispatch(
          signUpWithEmail({
            email,
            password,
          }),
        ).unwrap();

        alert("Verification email sent. Please verify your email.");

        setIsSignup(false);
      } else {
        await dispatch(
          signInWithEmail({
            email,
            password,
          }),
        ).unwrap();
      }
    } catch (err) {
      if (typeof err === "string") {
        setError(err);
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong.");
      }
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setError("");
      await dispatch(signInWithGoogle()).unwrap();
    } catch (err) {
      if (typeof err === "string") {
        setError(err);
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong.");
      }
    }
  };

  return (
    <Stack spacing={2} py={1}>
      <Typography
        variant="body2"
        color="text.secondary"
        textAlign="center"
      >
        {isSignup
          ? "Create your Resume Builder account"
          : "Sign in to continue"}
      </Typography>

      {error && (
        <Alert severity="error">
          {error}
        </Alert>
      )}

      <TextField
        fullWidth
        label="Email"
        type="email"
        value={email}
        disabled={loading}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        fullWidth
        label="Password"
        type="password"
        value={password}
        disabled={loading}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button
        variant="contained"
        fullWidth
        disabled={loading}
        onClick={handleSubmit}
      >
        {loading
          ? "Please wait..."
          : isSignup
            ? "Create Account"
            : "Login"}
      </Button>

      <Button
        variant="outlined"
        fullWidth
        disabled={loading}
        onClick={handleGoogleLogin}
      >
        Continue with Google
      </Button>

      <Typography
        variant="body2"
        textAlign="center"
      >
        <Link
          component="button"
          underline="hover"
          onClick={() => setIsSignup((prev) => !prev)}
        >
          {isSignup
            ? "Already have an account? Login"
            : "Create an account"}
        </Link>
      </Typography>
    </Stack>
  );
};

export default LoginForm;