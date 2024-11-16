import React from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";

const HeaderBtnPanel = () => {
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      role="navigation"
      aria-label="Main navigation"
      sx={{
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            width: "100%",
            alignItems: "center",
          }}
          role="group"
          aria-label="Header navigation buttons"
        >
          <Button
            variant="contained"
            color="primary"
            sx={{
              borderRadius: "20px",
              backgroundColor: "black",
              color: "white",
              "&:hover": {
                backgroundColor: "#333",
              },
              width: { xs: "100%", sm: "auto" },
              marginBottom: { xs: 1, sm: 0 },
            }}
            aria-label="Home"
          >
            Home
          </Button>
          <Button
            variant="text"
            color="inherit"
            sx={{
              color: "black",
              "&:hover": {
                backgroundColor: "transparent",
                color: "gray",
              },
              width: { xs: "100%", sm: "auto" },
              marginBottom: { xs: 1, sm: 0 },
            }}
            aria-label="Features"
          >
            Features
          </Button>
          <Button
            variant="text"
            color="inherit"
            sx={{
              color: "black",
              "&:hover": {
                backgroundColor: "transparent",
                color: "gray",
              },
              width: { xs: "100%", sm: "auto" },
              marginBottom: { xs: 1, sm: 0 },
            }}
            aria-label="Pricing"
          >
            Pricing
          </Button>
          <Button
            variant="text"
            color="inherit"
            sx={{
              color: "black",
              "&:hover": {
                backgroundColor: "transparent",
                color: "gray",
              },
              width: { xs: "100%", sm: "auto" },
              marginBottom: { xs: 1, sm: 0 },
            }}
            aria-label="Blog"
          >
            Blog
          </Button>
          <Button
            variant="text"
            color="inherit"
            sx={{
              color: "black",
              "&:hover": {
                backgroundColor: "transparent",
                color: "gray",
              },
              width: { xs: "100%", sm: "auto" },
              marginBottom: { xs: 1, sm: 0 },
            }}
            aria-label="Resource"
          >
            Resource
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderBtnPanel;
