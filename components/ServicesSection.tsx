"use client";

import React from "react";
import Link from "next/link";
import { Box, Container, Typography, Paper, Button, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import SanitizerIcon from "@mui/icons-material/Sanitizer";
import BiotechIcon from "@mui/icons-material/Biotech";
import { motion } from "framer-motion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';

import content from "@/data/servicesContent.json";
//images
import hero from "@/assets/services.webp";
import Banner from "./layout/Banner";

const iconList: Record<string, React.ElementType> = {
  BiotechIcon: BiotechIcon,
  CleaningServicesIcon: CleaningServicesIcon,
  SanitizerIcon: SanitizerIcon,
  CheckCircleOutlineIcon: CheckCircleOutlineIcon,
};

export default function ServicesSection() {
  const { services } = content;

  return (
    // ID FUNDAMENTAL AQUI para o Scroll Spy
    <Box id="services" component="section">
      {/* --- HEADER --- */}
      <Banner 
        title={services.hero.title}
        subtitle={services.hero.subtitle}
        img={hero.src}
      />

      {/* --- GRADE DE SERVIÇOS --- */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
          {services.servicesList.map((service, index) => {
            const IconComponent = iconList[service.icon];

            return (
              <Box
                component={motion.div}
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                sx={{
                  flex: { xs: "1 1 100%", md: "1 1 calc(50% - 16px)" },
                  minWidth: "300px",
                  display: "flex", // Permite que o Paper interno estique
                }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column", // Mantém o layout empilhado
                    p: { xs: 4, md: 5 },
                    bgcolor: "#f8fdfe",
                    border: "1px solid",
                    borderColor: "divider",
                    borderRadius: "24px",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: "0px 20px 40px rgba(0,0,0,0.08)",
                      borderColor: "primary.light",
                      bgcolor: "white",
                      transform: "translateY(-8px)",
                    },
                  }}
                >
                  {/* Cabeçalho do Card: Ícone + Título */}
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
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

                  {/* Descrição Curta */}
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8, fontSize: "1.05rem", mb: 4 }}
                  >
                    {service.description}
                  </Typography>

                  {/* Divisória e Informações Extras (mt: "auto" empurra isso para o rodapé do card) */}
                  <Box sx={{ mt: "auto", pt: 4, borderTop: "1px solid", borderColor: "divider" }}>
                    {/* Grade de Miniaturas */}
                    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                      {[1, 2, 3].map((img, i) => (
                        <Box
                          key={i}
                          sx={{
                            width: { xs: "100%", sm: "calc(33.333% - 11px)" },
                            height: "100px",
                            bgcolor: "rgba(0,0,0,0.05)",
                            borderRadius: "12px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "text.disabled",
                          }}
                        >
                          {/* Troque este texto pelo componente <Image /> quando tiver as fotos */}
                          Image {i + 1}
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Paper>
              </Box>
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
            <Box
              sx={{
                p: { xs: 4, md: 5 },
                textAlign: "center",
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
                href="/#quote"
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
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
}
