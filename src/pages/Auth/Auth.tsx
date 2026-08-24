import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Box, Paper, Typography, TextField, Button, Link } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  signInWithEmail,
  signInWithGoogle,
  signUpWithEmail,
} from "../../store/authSlice";

const Auth = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      if (isSignup) {
        await dispatch(
          signUpWithEmail({
            email,
            password,
          }),
        ).unwrap();

        alert("Verification email sent");
      } else {
        await dispatch(
          signInWithEmail({
            email,
            password,
          }),
        ).unwrap();
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f5f5f5"
    >
      <Paper
        elevation={4}
        sx={{
          width: 420,
          p: 4,
          borderRadius: 3,
        }}
      >
        <Typography variant="h4" textAlign="center" mb={4}>
          Resume Builder
        </Typography>

        <TextField
          fullWidth
          label="Email"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 2 }}
          onClick={handleSubmit}
        >
          {isSignup ? "Sign Up" : "Login"}
        </Button>

        <Button
          fullWidth
          variant="outlined"
          sx={{ mt: 2 }}
          onClick={() => dispatch(signInWithGoogle())}
        >
          Continue with Google
        </Button>

        <Typography textAlign="center" mt={3}>
          <Link component="button" onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? "Already have account? Login" : "Create account"}
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Auth;
