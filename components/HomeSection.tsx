"use client";

import React from "react";
import Link from "next/link";
import {
  Box,
  Typography,
  Button,
  Container,
  Stack,
  Paper,
  Rating,
} from "@mui/material";

// Ícones
import BusinessIcon from "@mui/icons-material/Business";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import OpacityIcon from "@mui/icons-material/Opacity";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { motion } from "framer-motion";

// Dados e Imagens
import content from "@/data/homeContent.json";
import servicesContent from "@/data/servicesContent.json";
// IMPORTANTE: Substitua esta imagem pela sua nova imagem gerada por IA com pessoas
import heroImage from "@/assets/cece.png"; 

const facilityIcons: Record<string, React.ElementType> = {
  "Medical Units": LocalHospitalIcon,
  "Surgery & Dialysis": BusinessIcon,
  "Specialized Centers": OpacityIcon,
};

export default function HomeSection() {
  const { hero, facilities, reviews } = content.home;
  const { servicesList } = servicesContent.services;
  console.log(servicesList.map( service => service.title))

  // Resumo de serviços B2B hardcoded para a Hero (você pode mover para o JSON depois se preferir)
  const heroServices = [
    "OSHA & HIPAA Compliant Protocols",
    "Terminal Cleaning for Surgical Suites",
    "Specialized MRI & Cleanroom Sanitation"
  ];

  const handleScrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("services");
    if (element) {
      const navHeight = 60; // Mantendo o mesmo padrão do seu Navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box id="home" component="main">
      
      {/* --- 1. HERO SECTION --- */}
      <Box
        component="section"
        sx={{
          pt: { xs: 15, md: 22 }, // Aumentado para compensar o Navbar fixo
          pb: { xs: 8, md: 12 },
          bgcolor: "background.default", // Fundo claro e limpo, sem imagem escura
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: { xs: 6, md: 8 },
            }}
          >
            {/* LADO ESQUERDO: Textos e CTA */}
            <Box sx={{ flex: 2 }}>
              <Stack spacing={3}>
                <Typography
                  variant="h2"
                  component="h1"
                  sx={{
                    // fontWeight: 800,
                    fontSize: { xs: "2rem", md: "2.5rem", lg: "3rem" },
                    lineHeight: 1.1,
                    color: "primary.main", // Como o fundo agora é claro, o título volta a ser escuro/primário
                  }}
                >
                  {hero.subtitle}
                </Typography>

                {/* <Typography
                  variant="h5"
                  sx={{ fontWeight: 400, color: "text.secondary", maxWidth: "540px" }}
                >
                  {hero.subtitle}
                </Typography> */}

                <Stack spacing={2} sx={{ py: 2 }}>
                  {servicesList.map((service, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <CheckCircleIcon color="secondary" />
                      <Typography variant="body1" sx={{ fontWeight: 600, color: "text.secondary" }}>
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
                      px: 4,
                      py: 1.8,
                      textTransform: "none",
                      fontWeight: "bold",
                      color: "white",
                      bgcolor: "secondary.main",
                      "&:hover": { bgcolor: "secondary.dark" },
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
                      "&:hover": {
                        borderColor: "primary.dark",
                        bgcolor: "rgba(0, 85, 150, 0.05)",
                      },
                    }}
                  >
                    {hero.button2}
                  </Button>
                </Stack>
              </Stack>
            </Box>

            {/* LADO DIREITO: Imagem de Pessoa */}
            <Box 
              component={motion.div}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              sx={{ flex: 1, width: "100%", display: "flex", justifyContent: "center" }}
            >
              <Box
                sx={{
                  position: "relative",
                  height: { xs: "350px", md: "400px" },
                  width: "100%",
                  borderRadius: "24px",
                  overflow: "hidden",
                  boxShadow: "0px 30px 60px rgba(0,0,0,0.15)", // Sombra premium para destacar a imagem
                }}
              >
                <Box
                  component="img"
                  src={heroImage.src}
                  alt="FMFC Cleaning Professionals"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
                
                {/* Badge flutuante para reforçar autoridade B2B */}
                {/* <Paper
                  elevation={4}
                  sx={{
                    position: "absolute",
                    bottom: 30,
                    left: -20, // Faz a caixa sair um pouco para fora da imagem no desktop
                    display: { xs: 'none', sm: 'flex' },
                    alignItems: "center",
                    gap: 2,
                    p: 2,
                    borderRadius: "16px",
                    bgcolor: "white",
                  }}
                >
                  <Box sx={{ bgcolor: "rgba(0, 85, 150, 0.1)", p: 1.5, borderRadius: "12px", display: "flex" }}>
                    <VerifiedUserIcon color="primary" />
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 800, color: "primary.main" }}>
                      Certified Experts
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Medical-Grade Standards
                    </Typography>
                  </Box>
                </Paper> */}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* --- 2. WHAT WE CLEAN SECTION --- */}
      <Box
        component="section"
        sx={{ py: { xs: 5, md: 8 }, bgcolor: "white" }}
      >
        <Container maxWidth="lg">
          <Stack spacing={6}>
            <Stack
              spacing={1}
              sx={{ textAlign: "center", alignItems: "center" }}
            >
              <Typography
                variant="overline"
                sx={{
                  color: "secondary.main",
                  fontWeight: "bold",
                  letterSpacing: 2,
                }}
              >
                {facilities.preTitle}
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  color: "primary.main",
                  fontSize: { xs: "2.3rem", md: "3.3rem" },
                }}
              >
                {facilities.title}
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ fontWeight: 400, maxWidth: "650px", pt: 1 }}
              >
                {facilities.subtitle}
              </Typography>
            </Stack>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 3,
                justifyContent: "center",
              }}
            >
              {facilities.facilitiesList.map((facility, index) => {
                const IconComponent = facilityIcons[facility.category];
                return (
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
                      width: {
                        xs: "100%",
                        sm: "300px",
                      },
                      display: "flex",
                      justifyContent: "space-around",
                    }}
                  >
                    <Paper
                      key={index}
                      elevation={0}
                      sx={{
                        width: "100%",
                        p: 4,
                        bgcolor: "#f8fdfe",
                        borderRadius: "20px",
                        border: "1px solid",
                        borderColor: "divider",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          bgcolor: "white",
                          boxShadow: "0px 20px 40px rgba(0,0,0,0.08)",
                          transform: "translateY(-8px)",
                          borderColor: "primary.light",
                        },
                      }}
                    >
                      <Stack spacing={2}>
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 2 }}
                        >
                          {IconComponent && (
                            <Box
                              sx={{
                                bgcolor: "primary.main",
                                p: 1,
                                borderRadius: "12px",
                                display: "flex",
                                color: "white",
                              }}
                            >
                              <IconComponent fontSize="medium" />
                            </Box>
                          )}
                          <Typography
                            variant="h6"
                            sx={{ fontWeight: 700, color: "primary.main" }}
                          >
                            {facility.category}
                          </Typography>
                        </Box>
                        <Box
                          component="ul"
                          sx={{ m: 0, p: 0, listStyle: "none" }}
                        >
                          {facility.items.map((item, idx) => (
                            <Typography
                              key={idx}
                              component="li"
                              variant="body2"
                              sx={{
                                py: 0.5,
                                color: "text.secondary",
                                display: "flex",
                                alignItems: "center",
                                "&::before": {
                                  content: '""',
                                  width: "6px",
                                  height: "6px",
                                  bgcolor: "secondary.main",
                                  borderRadius: "50%",
                                  display: "inline-block",
                                  mr: 1.5,
                                },
                              }}
                            >
                              {item}
                            </Typography>
                          ))}
                        </Box>
                      </Stack>
                    </Paper>
                  </Box>
                );
              })}
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* --- 3. TESTIMONIALS SECTION --- */}
      <Box
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
    </Box>
  );
}