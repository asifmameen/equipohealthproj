import React from "react";
import { Box, Typography, Paper, Button, Grid2 } from "@mui/material";
import dashboardImage from "../../images/dashboard.jpg"; // Adjust the path to your assets folder
import deskManagementImage from "../../images/deskManagement.jpg";
import customerMonitoringImage from "../../images/customerMonitoring.jpg";

const FeatureListWidget = () => {
  const features = [
    {
      title: "Dashboard to monitor your business sales from anywhere",
      description:
        "Dashboard provides in-depth insight into the performance menu items. You can see popular and unsold menus, helping you to monitor your restaurant business sales.",
      image: dashboardImage,
    },
    {
      title: "Easier and better Desk Management",
      description:
        "Desk management becomes smoother with interactive table visualizations. You can manage orders, allocate tables, and maximize restaurant capacity.",
      image: deskManagementImage,
    },
    {
      title: "More efficient customer recording and monitoring",
      description:
        "Monitor order records to tailor orders to customer preferences, such as options to add or remove ingredients for a more personalized experience and better service.",
      image: customerMonitoringImage,
    },
  ];

  return (
    <Box
      sx={{ padding: 4, backgroundColor: "#f5f5f5", borderRadius: 2 }}
      role="region"
      aria-labelledby="feature-list-heading"
    >
      <Typography
        id="feature-list-heading"
        variant="h4"
        fontWeight="bold"
        align="center"
        gutterBottom
      >
        Complementary features for your business needs
      </Typography>

      <Grid2 container spacing={4} mt={2}>
        {features.map((feature, index) => (
          <Grid2
            item
            xs={12}
            key={index}
            role="region"
            aria-labelledby={`feature-title-${index}`}
            aria-describedby={`feature-desc-${index}`}
          >
            <Paper
              elevation={3}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                padding: 3,
                borderRadius: 3,
                backgroundColor: "#ffffff",
              }}
            >
              <Box
                sx={{
                  width: { xs: "100%", md: "40%" },
                  height: 200,
                  marginRight: { md: 3 },
                  marginBottom: { xs: 2, md: 0 },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                  aria-hidden="true"
                />
              </Box>

              <Box sx={{ flex: 1 }}>
                <Typography
                  id={`feature-title-${index}`}
                  variant="h6"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ color: "#333" }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  id={`feature-desc-${index}`}
                  variant="body2"
                  color="textSecondary"
                  paragraph
                >
                  {feature.description}
                </Typography>

                <Box mt={2} sx={{ display: "flex", gap: 2 }}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#FF5722",
                      color: "#fff",
                      "&:hover": { backgroundColor: "#E64A19" },
                    }}
                    aria-label={`Launch demo for ${feature.title}`}
                  >
                    Launch Demo
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      borderColor: "#333",
                      color: "#333",
                      "&:hover": { borderColor: "#555", color: "#555" },
                    }}
                    aria-label={`More info about ${feature.title}`}
                  >
                    More Info
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default FeatureListWidget;
