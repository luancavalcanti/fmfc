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
import { motion } from "framer-motion";

// Dados e Imagens
// Certifique-se de que os caminhos de importação estão corretos para o seu projeto
import content from "@/data/homeContent.json";
import heroImage from "@/assets/hero.webp";

// Mapeamento de Ícones para a seção Facilities
const facilityIcons: Record<string, React.ElementType> = {
  "Medical Units": LocalHospitalIcon,
  "Surgery & Dialysis": BusinessIcon,
  "Specialized Centers": OpacityIcon,
};

export default function HomeSection() {
  // Desestruturando os dados do JSON
  const { hero, facilities, reviews } = content.home;

  return (
    // Box Principal com o ID "home" para o Scroll Spy do Navbar
    <Box id="home" component="main">
      {/* --- 1. HERO SECTION --- */}
      <Box
        component="section"
        sx={{
          pt: { xs: 8, md: 12 },
          pb: { xs: 8, md: 12 },
          display: "flex",
          alignItems: "center",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          minHeight: "100vh", // Usando minHeight para garantir boa visualização em telas altas
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ flex: 1.2 }}>
            <Stack spacing={3}>
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  lineHeight: 1.1,
                }}
              >
                {hero.title}
              </Typography>

              <Typography
                variant="h4"
                sx={{ fontWeight: 400, maxWidth: "540px" }}
              >
                {hero.subtitle}
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ pt: 2 }}
              >
                {/* BOTÃO PARA PÁGINA QUOTE SEPARADA */}
                <Button
                  component={Link}
                  href="/quote"
                  variant="contained"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.8,
                    textTransform: "none",
                    fontWeight: "bold",
                    color: "text.primary",
                    bgcolor: "secondary.main",
                    "&:hover": { bgcolor: "secondary.dark", color: "white" },
                  }}
                >
                  {hero.button1}
                </Button>

                {/* BOTÃO SCROLL PARA SERVICES */}
                <Button
                  href="#services"
                  variant="outlined"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.8,
                    textTransform: "none",
                    fontWeight: "bold",
                    color: "white",
                    borderColor: "white",
                    "&:hover": {
                      borderColor: "secondary.main",
                      color: "secondary.main",
                    },
                  }}
                >
                  {hero.button2}
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* --- 2. FACILITIES SECTION --- */}
      <Box
        component="section"
        sx={{ py: { xs: 10, md: 15 }, bgcolor: "white" }}
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
                    // Passamos a responsividade para o WRAPPER da animação
                    sx={{
                      width: {
                        xs: "100%",
                        sm: "300px", // ou o tamanho do seu gap
                      },
                      display: "flex", // Garante que o Paper filho estique
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

      {/* --- 3. REVIEWS SECTION --- */}
      <Box
        component="section"
        sx={{
          py: { xs: 10, md: 15 },
          bgcolor: "background.default", // Cinza clarinho para dar contraste com a seção branca acima
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
