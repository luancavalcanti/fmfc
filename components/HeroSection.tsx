"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { Box, Typography, Button, Container, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { motion, useScroll, useTransform } from "framer-motion";
import content from "@/data/heroContent.json";
import servicesContent from "@/data/servicesContent.json";
import problemContent from "@/data/problemContent.json";
import CancelIcon from "@mui/icons-material/Cancel";
import PreTitle from "@/components/ui/PreTitle";
import SectionTitle from "@/components/ui/SectionTitle";
import { Paper } from "@mui/material";

import heroBgHorizontal from "@/assets/hero_bg_horizontal3.jpg";
import Title from "@/components/ui/Title";
import Subtitle from "@/components/ui/Subtitle";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";

// Componente auxiliar local para padronizar os cartões de problemas e expectativas
function SectionPaper({ children }: { children: React.ReactNode }) {
  return (
    <Paper
      elevation={0}
      sx={{
        flex: 1,
        p: { xs: 4, md: 5 },
        borderRadius: "24px",
        border: "1px solid rgba(255, 255, 255, 0.6)",
        bgcolor: "rgba(255, 255, 255, 0)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)", // Suporte para Safari/iOS
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.1)",
        transition: "all 0.3s ease",
        "&:hover": {
          bgcolor: "rgba(255, 255, 255, 0.4)",
          boxShadow: "0 12px 40px 0 rgba(31, 38, 135, 0.1)",
          transform: "translateY(-4px)",
        },
      }}
    >
      {children}
    </Paper>
  );
}

export default function HeroSection() {
  const { hero } = content;
  const { servicesList } = servicesContent.services;
  const { problem } = problemContent;

  const handleScrollToQuote = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const element = document.getElementById("quote");
    if (element) {
      const navHeight = 60;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const handleScrollToServices = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const element = document.getElementById("services");
    if (element) {
      const navHeight = 60;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const blobShape = "60% 40% 30% 70% / 60% 30% 70% 40%";
  const blobShape2 = "40% 60% 70% 30% / 40% 50% 60% 50%";

  // Referência para o Parallax nativo com Framer Motion
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Velocidades do Parallax (Y)
  // Texto: Move para baixo lentamente
  const textY = useTransform(scrollYProgress, [0, 1], ["0px", "150px"]);
  // Imagem: Move para baixo um pouco menos que o texto
  const imageY = useTransform(scrollYProgress, [0, 1], ["0px", "80px"]);
  // Bolhas distribuídas ao longo de todo o bloco unificado
  const bubble1Y = useTransform(scrollYProgress, [0, 1], ["0px", "-260px"]);
  const bubble2Y = useTransform(scrollYProgress, [0, 1], ["0px", "220px"]);
  const bubble3Y = useTransform(scrollYProgress, [0, 1], ["0px", "-180px"]);
  const bubble4Y = useTransform(scrollYProgress, [0, 1], ["-60px", "160px"]);
  const bubble5Y = useTransform(scrollYProgress, [0, 1], ["60px", "-180px"]);

  return (
    <Box
      ref={ref}
      id="hero"
      component="section"
      sx={{
        position: "relative",
        pt: { xs: 15, md: 22 },
        pb: { xs: 10, md: 14 },
        backgroundColor: "#ffffff",
        overflow: "hidden",
      }}
    >
      {/* ELEMENTOS DECORATIVOS COM PARALLAX UNIFICADOS */}
      <Box
        component={motion.div}
        style={{ y: bubble1Y }}
        sx={{
          position: "absolute",
          top: -60,
          left: -80,
          width: 320,
          height: 320,
          borderRadius: "50%",
          bgcolor: "rgba(51, 190, 202, 0.14)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <Box
        component={motion.div}
        style={{ y: bubble2Y }}
        sx={{
          position: "absolute",
          top: "20%",
          left: "35%",
          width: 420,
          height: 420,
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
          top: "10%",
          right: -80,
          width: 280,
          height: 280,
          borderRadius: "50%",
          bgcolor: "rgba(51, 190, 202, 0.12)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <Box
        component={motion.div}
        style={{ y: bubble4Y }}
        sx={{
          position: "absolute",
          top: "50%",
          left: -90,
          width: 360,
          height: 360,
          borderRadius: "50%",
          bgcolor: "rgba(51, 190, 202, 0.10)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <Box
        component={motion.div}
        style={{ y: bubble5Y }}
        sx={{
          position: "absolute",
          bottom: "8%",
          right: -100,
          width: 380,
          height: 380,
          borderRadius: "50%",
          bgcolor: "rgba(246, 175, 133, 0.12)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2, mb: { xs: 12, md: 18 } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: 8, md: 4 },
          }}
        >
          {/* LADO ESQUERDO: Textos e CTA */}
          <Box
            component={motion.div}
            style={{ y: textY }}
            sx={{ flex: 1.2, maxWidth: "600px" }}
          >
            <Stack spacing={3}>
              <Title customColor="primary.dark">
                {hero.subtitle}
              </Title>
              <Title customColor="secondary.light" sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}>
                {hero.subtitle1}
              </Title>
              <Subtitle>
                {hero.subtitle2}
              </Subtitle>

              <Stack spacing={1.5} sx={{ py: 2 }}>
                {servicesList.map((service, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <CheckCircleIcon sx={{ color: "primary.main" }} />
                    <Typography variant="body1" sx={{ fontWeight: 600, color: "#444" }}>
                      {service.title}
                    </Typography>
                  </Box>
                ))}
              </Stack>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ pt: 2 }}
              >
                <PrimaryButton href="#quote" onClick={handleScrollToQuote}>
                  {hero.button1}
                </PrimaryButton>

                <SecondaryButton href="#services" onClick={handleScrollToServices}>
                  {hero.button2}
                </SecondaryButton>
              </Stack>
            </Stack>
          </Box>

          {/* LADO DIREITO: Imagem em Blob (Inspirada na Referência) */}
          <Box
            component={motion.div}
            style={{ y: imageY }}
            sx={{
              flex: 1,
              width: "100%",
              position: "relative",
              height: { xs: "400px", md: "650px" }, // CORRIGIDO: height fixo para a imagem não sumir
            }}
          >
            {/* Sombra / Fundo Colorido do Blob */}
            <Box
              sx={{
                position: "absolute",
                top: "5%",
                left: "5%",
                width: "90%",
                height: "90%",
                bgcolor: "primary.light",
                borderRadius: blobShape2,
                opacity: 0.8,
                transform: "rotate(-10deg)",
                zIndex: 1,
              }}
            />

            {/* A Imagem Principal Mascarada */}
            <Box
              sx={{
                position: "absolute", // CORRIGIDO: absolute para preencher o pai flex perfeitamente
                top: "0%",
                left: "0%",
                width: "95%",
                height: "95%",
                backgroundImage: `url(${heroBgHorizontal.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: blobShape,
                zIndex: 2,
                boxShadow: "0px 20px 40px rgba(0,0,0,0.1)",
              }}
            />
          </Box>
        </Box>
      </Container>

      {/* --- PARTE 2: PROBLEM IDENTIFICATION (Mesmo background contínuo) --- */}
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Stack spacing={4} sx={{ textAlign: "flex-start", mb: 6 }}>
          <SectionTitle>
            {problem.title}
          </SectionTitle>
          <Subtitle sx={{ maxWidth: "800px", mx: 0 }}>
            {problem.subtitle}
          </Subtitle>
        </Stack>

        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 4 }}>
          {/* Left Side: Tired of */}
          <SectionPaper>
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
          </SectionPaper>

          {/* Right Side: What to expect */}
          <SectionPaper>
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
          </SectionPaper>
        </Box>

        <Box sx={{ mt: 8, textAlign: "flex-start" }}>
          <Typography variant="h5" sx={{ fontWeight: 400, color: "primary.main" }}>
            {problem.footerText}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
