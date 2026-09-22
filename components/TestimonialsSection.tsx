"use client";
import React from "react";
import { Box, Typography, Container, Stack, Paper, Rating } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { motion } from "framer-motion";
import content from "@/data/testimonialsContent.json";

export default function TestimonialsSection() {
  const { reviews } = content;

  return (
    <>
      <Box
        id="testimonials"
        component="section"
        sx={{
          py: { xs: 8, md: 10 },
          bgcolor: "background.default",
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={6}>
            <Stack spacing={1} sx={{ textAlign: "center" }}>
              <Typography
                variant="overline"
                sx={{
                  color: "primary.main",
                  fontWeight: "bold",
                  letterSpacing: 2,
                }}
              >
                {reviews.preTitle}
              </Typography>
              <Typography
                variant="h3"
                sx={{ fontWeight: 800, color: "primary.main" }}
              >
                {reviews.title}
              </Typography>
            </Stack>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 4,
              }}
            >
              {reviews.testimonials.map((testimonial, index) => (
                <Box
                  component={motion.div}
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: "easeOut",
                  }}
                  sx={{
                    flex: 1,
                    display: "flex",
                  }}
                >
                  <Paper
                    key={index}
                    elevation={2}
                    sx={{
                      p: 4,
                      flex: 1,
                      borderRadius: "20px",
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      transition: "transform 0.3s ease",
                      "&:hover": { transform: "translateY(-5px)" },
                    }}
                  >
                    <FormatQuoteIcon
                      sx={{
                        position: "absolute",
                        top: 20,
                        right: 20,
                        fontSize: 40,
                        color: "rgba(0, 85, 150, 0.1)",
                      }}
                    />

                    <Box>
                      <Rating
                        value={testimonial.stars}
                        readOnly
                        sx={{ mb: 2, color: "secondary.main" }}
                      />
                      <Typography
                        variant="body1"
                        sx={{
                          fontStyle: "italic",
                          color: "text.secondary",
                          mb: 3,
                          lineHeight: 1.7,
                        }}
                      >
                        {testimonial.text}
                      </Typography>
                    </Box>

                    <Stack direction="row" spacing={2} alignItems="center">
                      <Box>
                        <Typography
                          variant="subtitle1"
                          sx={{ fontWeight: 700, color: "primary.main" }}
                        >
                          {testimonial.author}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {testimonial.position}
                        </Typography>
                      </Box>
                    </Stack>
                  </Paper>
                </Box>
              ))}
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
