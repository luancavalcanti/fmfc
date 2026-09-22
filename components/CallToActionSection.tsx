"use client";
import React from "react";
import Link from "next/link";
import { Box, Container, Typography, Paper, Button } from "@mui/material";
import content from "@/data/servicesContent.json";

export default function CallToActionSection() {
  const { callToAction } = content.services;

  return (
    <Box component="section" sx={{ bgcolor: "white", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="md">
        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, md: 6 },
            textAlign: "center",
            borderRadius: "24px",
            border: "1px solid",
            borderColor: "divider",
            bgcolor: "#f8fafd", // Suave tom de azul/cinza para contrastar com o fundo branco da seção
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 3, color: "primary.main" }}>
            {callToAction.title}
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4, fontWeight: 400 }}>
            {callToAction.subtitle}
          </Typography>

          {/* BOTÃO PARA PÁGINA QUOTE */}
          <Button
            component={Link}
            href="/#quote"
            variant="contained"
            size="large"
            sx={{
              bgcolor: "secondary.main",
              color: "text.primary", // Texto escuro contrastando com o botão laranja
              fontWeight: "bold",
              px: 6,
              py: 2,
              borderRadius: "50px",
              "&:hover": { bgcolor: "secondary.dark", color: "white" },
            }}
          >
            {callToAction.button}
          </Button>
        </Paper>
      </Container>
    </Box>
  );
}
