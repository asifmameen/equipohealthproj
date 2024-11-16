import React from "react";
import { Box, Container, Typography } from "@mui/material";
import BusinessPackageWidget from "../Panels/SubscriptionPackageWidget";
import FeatureListWidget from "../Panels/FeatureListWidget";
import UserReviewWidget from "../Panels/UserReviewWidget";
import SocialMediaFooterPanel from "../Panels/SocialMediaFooterPanel";
import HeaderMainPanel from "../Panels/HeaderMainComponent/HeaderMainPanel";
import FirstWidgetLayout from "../Panels/WidgetMainComponent/StatisticWidgetComponent/FirstWidgetLayout";

const HomeParentContainer = () => {
  return (
    <Container maxWidth="lg">
      <HeaderMainPanel />

      <Box
        component="section"
        role="region"
        aria-labelledby="statistics-section"
        py={3}
        textAlign="center"
        sx={{ backgroundColor: "#f5f5f5", marginBottom: 0 }}
      >
        <FirstWidgetLayout />
      </Box>

      <Box
        component="section"
        role="region"
        aria-labelledby="features-section"
        py={3}
        sx={{ marginBottom: 0 }}
      >
        <FeatureListWidget />
      </Box>

      <Box
        component="section"
        role="region"
        aria-labelledby="business-packages-section"
        py={3}
        textAlign="center"
        sx={{ marginBottom: 0 }}
      >
        <BusinessPackageWidget />
      </Box>

      <Box
        component="section"
        role="region"
        aria-labelledby="user-reviews-section"
        py={3}
        sx={{ marginBottom: 0 }}
      >
        <UserReviewWidget />
      </Box>

      <Box
        component="footer"
        role="contentinfo"
        py={2}
        sx={{
          position: "relative",
          backgroundColor: "#333",
          color: "#fff",
          marginTop: 0,
        }}
      >
        <Typography variant="body2" sx={{ textAlign: "center" }}>
          © 2024 Coca POS. All rights reserved.
        </Typography>
        <SocialMediaFooterPanel />
      </Box>
    </Container>
  );
};

export default HomeParentContainer;
