"use client";

import React from "react";
import Link from "next/link";
import { Box, Container, Typography, Paper, Button } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CleanHandsIcon from "@mui/icons-material/CleanHands";
import SanitizerIcon from "@mui/icons-material/Sanitizer";
import BiotechIcon from "@mui/icons-material/Biotech";
import { motion } from "framer-motion";

import content from "@/data/servicesContent.json";
//images
import hero from "@/assets/services.webp";

const iconList: Record<string, React.ElementType> = {
  BiotechIcon: BiotechIcon,
  CleanHandsIcon: CleanHandsIcon,
  SanitizerIcon: SanitizerIcon,
  CheckCircleOutlineIcon: CheckCircleOutlineIcon,
};

export default function ServicesSection() {
  const { services } = content;

  return (
    // ID FUNDAMENTAL AQUI para o Scroll Spy
    <Box id="services" component="section">
      {/* --- HEADER SIMPLIFICADO (Banner Visual) --- */}
      <Box
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${hero.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          py: { xs: 10, md: 15 },
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>
            {services.hero.title}
          </Typography>
          <Typography
            variant="h6"
            sx={{ opacity: 0.9, maxWidth: "800px", mx: "auto" }}
          >
            {services.hero.subtitle}
          </Typography>
        </Container>
      </Box>

      {/* --- GRADE DE SERVIÇOS --- */}
      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 15 } }}>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
          {services.servicesList.map((service, index) => {
            const IconComponent = iconList[service.icon];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                style={{ flex: "1 1 calc(50% - 32px)", minWidth: "300px" }}
              >
                <Paper
                  key={index}
                  elevation={0}
                  sx={{
                    flex: { xs: "1 1 100%", md: "1 1 calc(50% - 32px)" },
                    p: { xs: 4, md: 5 },
                    bgcolor: "#f8fdfe", // Fundo azulado para manter consistência com Facilities/About
                    border: "1px solid",
                    borderColor: "divider",
                    borderRadius: "24px",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0px 20px 40px rgba(0,0,0,0.08)",
                      borderColor: "primary.light",
                      bgcolor: "white", // Clareia ao passar o mouse
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 2,
                    }}
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
                      {service.title}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8, fontSize: "1.05rem" }}
                  >
                    {service.description}
                  </Typography>
                </Paper>
              </motion.div>
            );
          })}
        </Box>
      </Container>

      {/* --- CALL TO ACTION --- */}
      <Box sx={{ bgcolor: "background.default", mb: 15 }}>
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: "easeOut",
            }}
            style={{ flex: "1 1 calc(50% - 32px)", minWidth: "300px" }}
          >
            <Paper
              elevation={0}
              sx={{
                p: { xs: 4, md: 5 },
                textAlign: "center",
                borderRadius: "24px",
                border: "1px solid",
                borderColor: "divider",
                bgcolor: "white",
              }}
            >
              <Typography
                variant="h4"
                sx={{ fontWeight: 800, mb: 3, color: "primary.main" }}
              >
                {services.callToAction.title}
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ mb: 4, fontWeight: 400 }}
              >
                {services.callToAction.subtitle}
              </Typography>

              {/* BOTÃO PARA PÁGINA QUOTE */}
              <Button
                component={Link}
                href="/quote"
                variant="contained"
                size="large"
                sx={{
                  bgcolor: "secondary.main",
                  color: "text.primary",
                  fontWeight: "bold",
                  px: 6,
                  py: 2,
                  borderRadius: "50px",
                  "&:hover": { bgcolor: "secondary.dark", color: "white" },
                }}
              >
                {services.callToAction.button}
              </Button>
            </Paper>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
}
