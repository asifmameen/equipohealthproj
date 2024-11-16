import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import LoginModal from "../HeaderMainComponent/LoginModal";
import { auth } from "../../../utils/firebase-config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import logo from "../../../images/logo.png";
import HeaderBtnPanel from "./HeaderButtonPanel";

const HeaderMainPanel = () => {
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLoginOpen = () => {
    setOpen(true);
  };

  const handleLoginClose = () => {
    setOpen(false);
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null); // Clear user state on logout
  };

  return (
    <Box
      component="header"
      py={3}
      role="banner"
      aria-label="Main site header with navigation and user actions"
      sx={{
        width: "100%",
        px: { xs: 2, sm: 3 },
        backgroundColor: "#fff",
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        role="navigation"
        aria-label="Header navigation"
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            flex: 1,
            justifyContent: { xs: "center", sm: "flex-start" },
            mb: { xs: 2, sm: 0 },
          }}
          role="group"
          aria-label="Site logo and navigation buttons"
        >
          <img
            src={logo}
            alt="Coca POS Logo"
            style={{ height: "40px" }}
            aria-label="Coca POS Logo"
          />
          <HeaderBtnPanel />
        </Box>

        {/* User Actions Panel */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            flexDirection: { xs: "column", sm: "row" }, 
          }}
          role="group"
          aria-label="User authentication and actions"
        >
          {user ? (
            <>
              <Typography
                variant="h6"
                aria-label={`Welcome message for user, ${user.email}`}
              >
                - Welcome, {user.email}
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleLogout}
                aria-label="Logout"
              >
                Logout
              </Button>
            </>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={handleLoginOpen}
              aria-label="Sign in"
            >
              Sign In
            </Button>
          )}
        </Box>
      </Box>

      <LoginModal
        open={open}
        onClose={handleLoginClose}
        aria-label="Login modal for user authentication"
      />
    </Box>
  );
};

export default HeaderMainPanel;
