"use client";
import React from "react";
import { Box, Typography, Container, Stack, Paper } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import content from "@/data/problemContent.json";

export default function ProblemSection() {
  const { problem } = content;

  return (
    <>
      {/* --- 1.5. PROBLEM IDENTIFICATION SECTION --- */}
      <Box
        component="section"
        sx={{ py: { xs: 8, md: 10 }, bgcolor: "white" }}
      >
        <Container maxWidth="lg">
          <Stack spacing={4} sx={{ textAlign: "flex-start", mb: 6 }}>
            <Typography
              variant="overline"
              sx={{ color: "secondary.main", fontWeight: "bold", letterSpacing: 2 }}
            >
              {problem.preTitle}
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 800, color: "primary.main", fontSize: { xs: "2rem", md: "2.8rem" } }}>
              {problem.title}
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400, maxWidth: "800px", mx: "auto" }}>
              {problem.subtitle}
            </Typography>
          </Stack>

          <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 4 }}>
            {/* Left Side */}
            <Paper elevation={0} sx={{ flex: 1, p: { xs: 4, md: 5 }, borderRadius: "20px", border: "1px solid", borderColor: "divider", bgcolor: "background.default" }}>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, color: "#FAA0A0" }}>
                {problem.tiredOf.title}
              </Typography>
              <Stack spacing={3}>
                {problem.tiredOf.items.map((item, index) => (
                  <Box key={index} sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                    <CancelIcon sx={{ mt: 0.3, color: "#FAA0A0" }} />
                    <Typography variant="h6" sx={{ color: "text.secondary", fontWeight: 500, fontSize: "1.1rem" }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Paper>

            {/* Right Side */}
            <Paper elevation={0} sx={{ flex: 1, p: { xs: 4, md: 5 }, borderRadius: "20px", border: "1px solid", borderColor: "divider", bgcolor: "background.default" }}>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, color: "#89D289" }}>
                {problem.expect.title}
              </Typography>
              <Stack spacing={3}>
                {problem.expect.items.map((item, index) => (
                  <Box key={index} sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                    <CheckCircleIcon sx={{ mt: 0.3, color: "#89D289" }} />
                    <Typography variant="h6" sx={{ color: "text.secondary", fontWeight: 500, fontSize: "1.1rem" }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Paper>
          </Box>

          <Box sx={{ mt: 8, textAlign: "flex-start" }}>
            <Typography variant="h5" sx={{ fontWeight: 400, color: "primary.main" }}>
              {problem.footerText}
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}
