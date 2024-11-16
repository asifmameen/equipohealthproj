import React, { useState } from "react";
import {
  Box,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  Grid2,
  Paper,
  Chip,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const BusinessPackageWidget = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const handleBillingCycleChange = (event, newCycle) => {
    if (newCycle !== null) {
      setBillingCycle(newCycle);
    }
  };

  const packages = [
    {
      name: "Basic",
      price: 20,
      features: [true, true, true, true, true, false, false, false],
      color: "#E0F2F1",
    },
    {
      name: "Business",
      price: 30,
      features: [true, true, true, true, true, true, false, false],
      color: "#E3F2FD",
      highlight: true,
    },
    {
      name: "Enterprise",
      price: 50,
      features: [true, true, true, true, true, true, true, true],
      color: "#EDE7F6",
    },
  ];

  const featuresList = [
    "Unlimited Transactions",
    "Multi Outlet",
    "Report Featured",
    "Inventory Management",
    "Direct report & team review",
    "Employee Management System",
    "CRM And Promotion Features",
    "Third Party Application Integration",
  ];

  return (
    <Box sx={{ padding: 4, backgroundColor: "#eaeaea" }}>
      <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
        Packages for your business
      </Typography>
      <Box display="flex" justifyContent="center" my={2}>
        <ToggleButtonGroup
          value={billingCycle}
          exclusive
          onChange={handleBillingCycleChange}
          aria-label="billing cycle"
          sx={{ backgroundColor: "#f1f1f1", borderRadius: 4 }}
        >
          <ToggleButton value="monthly" aria-label="monthly">
            Monthly
          </ToggleButton>
          <ToggleButton value="annual" aria-label="annual">
            Annual
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Typography variant="body2" align="center" color="textSecondary">
        {billingCycle === "annual" ? "Annual - 2 months free 🎉" : ""}
      </Typography>

      <Grid2 container spacing={2} justifyContent="center" mt={3}>
        {packages.map((pkg, index) => (
          <Grid2 item xs={12} md={4} key={index}>
            <Paper
              elevation={3}
              sx={{
                backgroundColor: pkg.color,
                padding: 3,
                borderRadius: 2,
                position: "relative",
              }}
            >
              {pkg.highlight && (
                <Chip
                  label="Best choice"
                  color="warning"
                  size="small"
                  sx={{ position: "absolute", top: 16, right: 16 }}
                />
              )}

              <Typography
                variant="h6"
                align="center"
                fontWeight="bold"
                color="textPrimary"
                gutterBottom
              >
                {pkg.name}
              </Typography>
              <Typography
                variant="h4"
                align="center"
                fontWeight="bold"
                color="textPrimary"
              >
                ${billingCycle === "annual" ? pkg.price * 10 : pkg.price}
              </Typography>
              <Typography
                variant="body2"
                align="center"
                color="textSecondary"
                gutterBottom
              >
                /month
              </Typography>

              <Box mt={2}>
                {featuresList.map((feature, idx) => (
                  <Box
                    key={idx}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    py={0.5}
                  >
                    <Typography variant="body2" color="textPrimary">
                      {feature}
                    </Typography>
                    {pkg.features[idx] ? (
                      <CheckIcon fontSize="small" color="success" />
                    ) : (
                      <Typography variant="body2" color="textSecondary">
                        –
                      </Typography>
                    )}
                  </Box>
                ))}
              </Box>
            </Paper>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default BusinessPackageWidget;
