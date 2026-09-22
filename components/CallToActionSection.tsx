"use client";
import React from "react";
import Link from "next/link";
import { Box, Container, Typography, Paper, Button } from "@mui/material";
import content from "@/data/servicesContent.json";
import SectionTitle from "@/components/ui/SectionTitle";
import Subtitle from "@/components/ui/Subtitle";
import PrimaryButton from "@/components/ui/PrimaryButton";

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
          <SectionTitle sx={{ mb: 3, fontSize: { xs: "2rem", md: "2.8rem" } }}>
            {callToAction.title}
          </SectionTitle>
          <Subtitle sx={{ mb: 4, mx: "auto" }}>
            {callToAction.subtitle}
          </Subtitle>

          {/* BOTÃO PARA PÁGINA QUOTE */}
          <PrimaryButton
            component={Link}
            href="/#quote"
            sx={{ px: 6, py: 2 }}
          >
            {callToAction.button}
          </PrimaryButton>
        </Paper>
      </Container>
    </Box>
  );
}
