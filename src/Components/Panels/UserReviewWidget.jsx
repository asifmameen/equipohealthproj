import React from "react";
import { Box, Typography, Grid, Paper, Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";

const TestimonialBox = styled(Paper)(({ theme, bgcolor }) => ({
  backgroundColor: bgcolor,
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
}));

const UserReviewWidget = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F5F5F5",
        padding: 4,
        borderRadius: 2,
      }}
      role="region"
      aria-labelledby="user-review-heading"
    >
      <Typography
        id="user-review-heading"
        variant="h4"
        gutterBottom
        aria-label="Ease in the Hand section heading"
      >
        Ease in the Hand
      </Typography>
      <Typography
        variant="body1"
        color="textSecondary"
        gutterBottom
        aria-label="Description of advantages of using the app in business"
      >
        Using our app in business, especially in the restaurant industry, has
        many advantages. Here are some of them:
      </Typography>

      <Grid
        container
        spacing={2}
        sx={{ marginTop: 2 }}
        role="region"
        aria-labelledby="features-heading"
      >
        <Typography id="features-heading" variant="h5" sx={{ display: "none" }}>
          Features
        </Typography>
        {[
          {
            title: "Operational efficiency",
            desc: "Automate ordering, payment, and stock management.",
          },
          {
            title: "Security data",
            desc: "Protect customer and business data with strong security.",
          },
          {
            title: "Stock management",
            desc: "Track stock in real-time to avoid stockouts.",
          },
          {
            title: "Easy to integrate",
            desc: "Easily integrate with third-party services.",
          },
          {
            title: "Manage financials",
            desc: "Automatically record purchase transactions.",
          },
          {
            title: "Business scalability",
            desc: "Scale as your business grows.",
          },
        ].map((feature, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            role="region"
            aria-labelledby={`feature-title-${index}`}
            aria-describedby={`feature-desc-${index}`}
          >
            <Paper sx={{ padding: 2, textAlign: "center" }}>
              <Typography
                id={`feature-title-${index}`}
                variant="h6"
                gutterBottom
                aria-label={`Feature title: ${feature.title}`}
              >
                {feature.title}
              </Typography>
              <Typography
                id={`feature-desc-${index}`}
                variant="body2"
                color="textSecondary"
                aria-label={`Feature description: ${feature.desc}`}
              >
                {feature.desc}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Grid
        container
        spacing={2}
        sx={{ marginTop: 4 }}
        role="region"
        aria-labelledby="testimonials-heading"
      >
        <Typography
          id="testimonials-heading"
          variant="h5"
          sx={{ display: "none" }}
        >
          Testimonials
        </Typography>
        {[
          {
            color: "#E8F5E9",
            name: "Stevano William",
            title: "CEO at Pizza Hut",
            text: "We are impressed with the operational efficiency improvements using this POS app.",
          },
          {
            color: "#E3F2FD",
            name: "Jennifer Lopes",
            title: "Business Owner at KFC",
            text: "This app has given us efficiency and accuracy in managing orders and payments.",
          },
          {
            color: "#FFF3E0",
            name: "Emanuel Rodrigo",
            title: "Product Owner at McDonald's",
            text: "The flexibility of this POS app makes it easy to adapt to market needs.",
          },
        ].map((testimonial, index) => (
          <Grid
            item
            xs={12}
            md={4}
            key={index}
            role="region"
            aria-labelledby={`testimonial-title-${index}`}
            aria-describedby={`testimonial-desc-${index}`}
          >
            <TestimonialBox bgcolor={testimonial.color}>
              <Avatar
                sx={{ bgcolor: "grey.300" }}
                aria-hidden="true"
                alt={`Avatar of ${testimonial.name}`}
              >
                {testimonial.name[0]}
              </Avatar>
              <Box>
                <Typography
                  id={`testimonial-desc-${index}`}
                  variant="body2"
                  color="textSecondary"
                  gutterBottom
                  aria-label={`Testimonial text: ${testimonial.text}`}
                >
                  {testimonial.text}
                </Typography>
                <Typography
                  id={`testimonial-title-${index}`}
                  variant="body2"
                  fontWeight="bold"
                  aria-label={`Testimonial author: ${testimonial.name}`}
                >
                  {testimonial.name}
                </Typography>
                <Typography
                  variant="caption"
                  color="textSecondary"
                  aria-label={`Testimonial author's role: ${testimonial.title}`}
                >
                  {testimonial.title}
                </Typography>
              </Box>
            </TestimonialBox>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default UserReviewWidget;
