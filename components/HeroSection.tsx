"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { Box, Typography, Button, Container, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { motion, useScroll, useTransform } from "framer-motion";
import content from "@/data/heroContent.json";
import servicesContent from "@/data/servicesContent.json";

import heroBgHorizontal from "@/assets/hero_bg_horizontal3.jpg";

export default function HeroSection() {
  const { hero } = content;
  const { servicesList } = servicesContent.services;

  const handleScrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
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
  // Bolhas: Movem-se em direções e velocidades diferentes
  const bubble1Y = useTransform(scrollYProgress, [0, 1], ["0px", "-200px"]);
  const bubble2Y = useTransform(scrollYProgress, [0, 1], ["0px", "250px"]);
  const bubble3Y = useTransform(scrollYProgress, [0, 1], ["0px", "-150px"]);

  return (
    <Box
      ref={ref}
      id="hero"
      component="section"
      sx={{
        position: "relative",
        pt: { xs: 15, md: 22 },
        pb: { xs: 8, md: 12 },
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        backgroundColor: "default",
        overflow: "hidden",
      }}
    >
      {/* ELEMENTOS DECORATIVOS COM PARALLAX */}
      <Box
        component={motion.div}
        style={{ y: bubble1Y }}
        sx={{
          position: "absolute",
          top: -50,
          left: -50,
          width: 300,
          height: 300,
          borderRadius: "50%",
          bgcolor: "rgba(51, 190, 202, 0.15)",
          zIndex: 0,
        }}
      />
      <Box
        component={motion.div}
        style={{ y: bubble2Y }}
        sx={{
          position: "absolute",
          bottom: -150,
          left: "35%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          bgcolor: "rgba(51, 190, 202, 0.08)",
          zIndex: 0,
        }}
      />
      <Box
        component={motion.div}
        style={{ y: bubble3Y }}
        sx={{
          position: "absolute",
          top: "20%",
          right: -80,
          width: 250,
          height: 250,
          borderRadius: "50%",
          bgcolor: "rgba(51, 190, 202, 0.15)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
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
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontWeight: 900,
                  color: "primary.dark",
                  fontSize: { xs: "2rem", md: "2.5rem", lg: "3.5rem" },
                  lineHeight: 1.1,
                  letterSpacing: "-1px",
                }}
              >
                {hero.subtitle}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "text.secondary",
                  fontWeight: 400,
                  lineHeight: 1.6,
                  maxWidth: "90%",
                }}
              >
                {hero.subtitle2}
              </Typography>

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
                <Button
                  component={Link}
                  href="/#quote"
                  variant="contained"
                  size="large"
                  sx={{
                    px: 5,
                    py: 1.8,
                    textTransform: "none",
                    fontWeight: "bold",
                    color: "white",
                    bgcolor: "secondary.main",
                    borderRadius: "50px",
                    boxShadow: "0px 10px 20px rgba(246, 175, 133, 0.3)",
                    "&:hover": { bgcolor: "secondary.dark", transform: "translateY(-2px)" },
                    transition: "all 0.3s ease",
                  }}
                >
                  {hero.button1}
                </Button>

                <Button
                  href="#services"
                  variant="outlined"
                  onClick={handleScrollToServices}
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.8,
                    textTransform: "none",
                    fontWeight: "bold",
                    color: "primary.main",
                    borderColor: "primary.main",
                    borderRadius: "50px",
                    "&:hover": {
                      borderColor: "primary.dark",
                      bgcolor: "rgba(51, 190, 202, 0.05)",
                    },
                  }}
                >
                  {hero.button2}
                </Button>
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
    </Box>
  );
}
