import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Box, Card, CardContent, Typography, Avatar } from "@mui/material";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const salesData = {
  January: 1500,
  February: 2000,
  March: 1800,
  April: 2200,
  May: 1700,
  June: 2100,
  July: 1600,
  August: 2300,
  September: 1900,
  October: 2400,
  November: 1800,
  December: 2000,
};

const SalesWidgetPanel = () => {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: "Monthly Sales",
        data: [],
        backgroundColor: "rgba(51, 153, 255, 0.6)",
        borderColor: "rgba(51, 153, 255, 1)",
        borderWidth: 1,
        borderRadius: 6,
      },
    ],
  });

  useEffect(() => {
    const months = Object.keys(salesData).sort();
    const salesValues = months.map((month) => salesData[month]);

    setData({
      labels: months,
      datasets: [
        {
          label: "Monthly Sales",
          data: salesValues,
          backgroundColor: "rgba(51, 153, 255, 0.6)",
          borderColor: "rgba(51, 153, 255, 1)",
          borderWidth: 1,
          borderRadius: 6,
        },
      ],
    });
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 2500,
        grid: {
          color: "rgba(220, 220, 220, 0.3)",
        },
        ticks: {
          stepSize: 500,
        },
      },
    },
  };

  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: 8,
        backgroundColor: "#ffffff",
        padding: 1,
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      }}
      role="region"
      height= "100%"
      aria-labelledby="sales-widget-header"
      aria-describedby="sales-widget-description"
    >
      <CardContent>
        <Box display="flex" alignItems="center" mb={2}>
          <Avatar
            sx={{
              backgroundColor: "#333",
              width: 32,
              height: 32,
              marginRight: 1.5,
            }}
            aria-hidden="true"
          >
            📊
          </Avatar>
          <Typography
            id="sales-widget-header"
            variant="h6"
            fontWeight="bold"
            sx={{ fontSize: 18, color: "#333" }}
          >
            Sales Statistics
          </Typography>
        </Box>
        <Typography
          id="sales-widget-description"
          variant="body2"
          color="textSecondary"
          mb={2}
        >
          A bar chart showing monthly sales statistics.
        </Typography>
        <Box
          role="img"
          aria-label="Bar chart representing monthly sales statistics with months on the x-axis and sales values on the y-axis."
          sx={{
            width: "100%",
            height: "300px",
            minHeight: "250px",
          }}
        >
          <Bar data={data} options={options} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default SalesWidgetPanel;
