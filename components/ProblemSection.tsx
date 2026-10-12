"use client";
import React, { useRef } from "react";
import { Box, Typography, Container, Stack, Paper } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { motion, useScroll, useTransform } from "framer-motion";
import content from "@/data/problemContent.json";
import PreTitle from "@/components/ui/PreTitle";
import SectionTitle from "@/components/ui/SectionTitle";
import Subtitle from "@/components/ui/Subtitle";

export default function ProblemSection() {
  const { problem } = content;

  // Referência para o Parallax com Framer Motion
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Movimentação suave das bolhas no scroll
  const bubble1Y = useTransform(scrollYProgress, [0, 1], ["-80px", "120px"]);
  const bubble2Y = useTransform(scrollYProgress, [0, 1], ["60px", "-140px"]);
  const bubble3Y = useTransform(scrollYProgress, [0, 1], ["-100px", "90px"]);

  return (
    <>
      {/* --- PROBLEM IDENTIFICATION SECTION --- */}
      <Box
        ref={ref}
        component="section"
        sx={{
          py: { xs: 8, md: 10 },
          bgcolor: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* ELEMENTOS DECORATIVOS COM PARALLAX (Bolhas de fundo) */}
        <Box
          component={motion.div}
          style={{ y: bubble1Y }}
          sx={{
            position: "absolute",
            top: "5%",
            left: -100,
            width: 320,
            height: 320,
            borderRadius: "50%",
            bgcolor: "rgba(51, 190, 202, 0.12)",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
        <Box
          component={motion.div}
          style={{ y: bubble2Y }}
          sx={{
            position: "absolute",
            top: "40%",
            right: -120,
            width: 380,
            height: 380,
            borderRadius: "50%",
            bgcolor: "rgba(51, 190, 202, 0.08)",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
        <Box
          component={motion.div}
          style={{ y: bubble3Y }}
          sx={{
            position: "absolute",
            bottom: -60,
            left: "20%",
            width: 240,
            height: 240,
            borderRadius: "50%",
            bgcolor: "rgba(246, 175, 133, 0.10)",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Stack spacing={4} sx={{ textAlign: "flex-start", mb: 6 }}>
            <SectionTitle>
              {problem.title}
            </SectionTitle>
            <Subtitle sx={{ maxWidth: "800px", mx: 0 }}>
              {problem.subtitle}
            </Subtitle>
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
