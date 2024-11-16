import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const RatingReviewPanel = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        width: 150,
        padding: 3,
        borderRadius: 4,
        backgroundColor: "#f5f0ff",
        textAlign: "center",
      }}
      role="region"
      aria-labelledby="rating-review-header"
      aria-describedby="rating-review-description"
    >
      <Box
        sx={{
          backgroundColor: "#fff",
          paddingY: 1,
          paddingX: 2,
          borderRadius: 2,
          display: "inline-flex",
          alignItems: "center",
          gap: 1,
        }}
        id="rating-review-header"
      >
        <Box
          sx={{
            width: 20,
            height: 20,
            backgroundColor: "#333",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
          }}
          aria-hidden="true"
        >
          ⭐
        </Box>
        <Typography variant="body2" fontWeight="bold">
          Rating Review
        </Typography>
      </Box>

      <Typography
        id="rating-review-description"
        variant="body2"
        color="textSecondary"
        mt={2}
        mb={3}
      >
        Reviews of some of our app restaurant industry companies.
      </Typography>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={1}
        aria-label="Current average rating"
      >
        <StarIcon
          sx={{ color: "#ff5a00" }}
          fontSize="large"
          aria-hidden="true"
        />
        <Typography variant="h4" fontWeight="bold">
          4.9
        </Typography>
      </Box>
    </Paper>
  );
};

export default RatingReviewPanel;
