import React from "react";
import { Box, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

const TotalPartnerPanel = () => {
  return (
    <Box
      sx={{
        width: 150,
        height: 215,
        backgroundColor: "#757575",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 2,
        padding: 2,
      }}
      role="region"
      aria-labelledby="total-partner-header"
      aria-describedby="total-partner-description"
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#424242",
          borderRadius: "10px",
          padding: "5px 10px",
          marginBottom: 2,
          width: "100%",
          justifyContent: "center",
        }}
        aria-hidden="true"
      >
        <VisibilityIcon
          sx={{ fontSize: 20, marginRight: 1 }}
          aria-hidden="true"
        />
        <Typography id="total-partner-header" variant="body2">
          Total Partner
        </Typography>
      </Box>

      <Typography
        variant="h3"
        fontWeight="bold"
        aria-label="50 thousand total partners"
      >
        50
      </Typography>
      <Typography id="total-partner-description" variant="subtitle2">
        thousands
      </Typography>
    </Box>
  );
};

export default TotalPartnerPanel;
