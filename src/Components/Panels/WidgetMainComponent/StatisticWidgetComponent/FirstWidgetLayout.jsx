import React from "react";
import { Grid2, Box, Typography, Button, Card } from "@mui/material";
import SalesWidgetPanel from "./SalesWidgetPanel";
import TotalPartnerPanel from "./TotalPartnerPanel";
import RatingReviewPanel from "./RatingReviewPanel";

const FirstWidgetLayout = () => {
  return (
    <Box
      sx={{ padding: 4, backgroundColor: "#eaeaea" }}
      role="region"
      aria-labelledby="main-widget-title"
    >
      <Grid2 container spacing={2}>
        <Grid2 item xs={12} md={8}>
          <Card
            sx={{
              backgroundColor: "#1a1a1a",
              color: "#fff",
              padding: 4,
              borderRadius: 3,
              height: "91%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
            role="region"
            aria-labelledby="business-management-title"
          >
            <Typography
              id="business-management-title"
              variant="h4"
              sx={{ fontWeight: "bold", mb: 2 }}
            >
              Manage your restaurant business
              <br />
              so advanced
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, mb: 1 }}>
              All the features you need in one App for any kind of your business
              🚀
            </Typography>
            <Button
              variant="contained"
              color="warning"
              sx={{
                alignSelf: "center",
                borderRadius: 2,
                padding: "10px 20px",
                fontWeight: "bold",
                textTransform: "none",
              }}
              aria-label="Get started with the app for free"
            >
              Get Started for Free
            </Button>
          </Card>
        </Grid2>
        <Grid2 item xs={12} md={4} container direction="column" spacing={2}>
          <Grid2 item>
            <Box
              role="region"
              aria-labelledby="sales-statistics-title"
              aria-describedby="sales-statistics-description"
            >
              <Typography
                id="sales-statistics-title"
                variant="h6"
                sx={{ display: "none" }}
              >
                Sales Statistics
              </Typography>
              <Typography
                id="sales-statistics-description"
                sx={{ display: "none" }}
              >
                Displays sales data and trends.
              </Typography>
              <SalesWidgetPanel />
            </Box>
          </Grid2>
          <Grid2 item>
            <Grid2 container spacing={2}>
              <Grid2 item xs={6}>
                <Box
                  role="region"
                  aria-labelledby="rating-review-title"
                  aria-describedby="rating-review-description"
                >
                  <Typography
                    id="rating-review-title"
                    variant="h6"
                    sx={{ display: "none" }}
                  >
                    Rating and Reviews
                  </Typography>
                  <Typography
                    id="rating-review-description"
                    sx={{ display: "none" }}
                  >
                    Provides insights into customer reviews and ratings.
                  </Typography>
                  <RatingReviewPanel />
                </Box>
              </Grid2>
              <Grid2 item xs={6}>
                <Box
                  role="region"
                  aria-labelledby="total-partner-title"
                  aria-describedby="total-partner-description"
                >
                  <Typography
                    id="total-partner-title"
                    variant="h6"
                    sx={{ display: "none" }}
                  >
                    Total Partners
                  </Typography>
                  <Typography
                    id="total-partner-description"
                    sx={{ display: "none" }}
                  >
                    Displays the number of active partners in the business.
                  </Typography>
                  <TotalPartnerPanel />
                </Box>
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default FirstWidgetLayout;
