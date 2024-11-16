import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Alert,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { auth } from "../../../utils/firebase-config";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const LoginModal = ({ open, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLoginWithEmail = async () => {
    setError(""); // Reset error message
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onClose(); // Close the modal on successful login
    } catch (err) {
      setError("Login failed. Please check your credentials.");
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      onClose(); // Close modal on successful login
    } catch (err) {
      setError("Google login failed. Please try again.");
    }
  };

  return (
    <Modal open={open} onClose={(e) => e.stopPropagation()}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h6">Sign In</Typography>
          <IconButton onClick={onClose} sx={{ color: "grey.500" }}>
            <CloseIcon />
          </IconButton>
        </Box>
        {error && <Alert severity="error">{error}</Alert>}
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleLoginWithEmail}
          sx={{ mt: 2 }}
        >
          Sign In
        </Button>
        <Button
          fullWidth
          variant="outlined"
          color="primary"
          onClick={handleGoogleLogin}
          sx={{ mt: 2 }}
        >
          Sign In with Google
        </Button>
      </Box>
    </Modal>
  );
};

export default LoginModal;
