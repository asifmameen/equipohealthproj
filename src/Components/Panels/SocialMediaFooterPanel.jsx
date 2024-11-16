import React from "react";
import { Box, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const SocialMediaFooterPanel = () => {
  const handleSocialClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Box
      sx={{
        position: "absolute",
        bottom: "10px",
        right: "10px",
        display: "flex",
        gap: 2,
        backgroundColor: "#333",
        padding: 1,
        borderRadius: "20px",
      }}
      aria-label="Social media links"
    >
      <IconButton
        onClick={() => handleSocialClick("https://www.facebook.com")}
        color="inherit"
        aria-label="Go to Facebook"
      >
        <FacebookIcon />
      </IconButton>
      <IconButton
        onClick={() =>
          handleSocialClick("https://www.instagram.com/cocapvtltd/")
        }
        color="inherit"
        aria-label="Go to Instagram"
      >
        <InstagramIcon />
      </IconButton>
      <IconButton
        onClick={() => handleSocialClick("https://x.com/cocapvtltd")}
        color="inherit"
        aria-label="Go to X"
      >
        <TwitterIcon />
      </IconButton>
    </Box>
  );
};

export default SocialMediaFooterPanel;
