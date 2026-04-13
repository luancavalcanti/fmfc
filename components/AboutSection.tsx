"use client";

import React from "react";
// 1. Importando o motion
import { motion } from "framer-motion";
import {
  Box,
  Container,
  Typography,
  Stack,
  Paper,
} from "@mui/material";

// Ícones
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import GroupsIcon from "@mui/icons-material/Groups";

// Dados e Imagens
import content from "@/data/aboutContent.json";
import heroImage from "@/assets/about.webp";

// Mapeamento dinâmico de ícones para os valores
const iconMap: Record<string, React.ElementType> = {
  "VerifiedUserIcon": VerifiedUserIcon,
  "GroupsIcon": GroupsIcon,
  "HistoryEduIcon": HistoryEduIcon,
};

export default function AboutSection() {
  const { about } = content;

  return (
    // ID "about" FUNDAMENTAL para o Scroll Spy do Navbar funcionar
    <Box id="about" component="section">
      
      {/* --- HEADER SIMPLIFICADO (Banner Visual) --- */}
      <Box
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          py: { xs: 10, md: 15 },
          textAlign: "center"
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>
            {about.hero.title}
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, maxWidth: "800px", mx: "auto" }}>
            {about.hero.subtitle}
          </Typography>
        </Container>
      </Box>

      {/* --- NOSSA FILOSOFIA E VALORES --- */}
      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 15 } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 8,
            alignItems: "center",
          }}
        >
          {/* Lado Esquerdo - Textos da Filosofia (Animado inteiro) */}
          <Box 
            component={motion.div}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            sx={{ flex: 1 }}
          >
            <Typography
              variant="overline"
              color="secondary.main"
              sx={{ fontWeight: "bold", letterSpacing: 2 }}
            >
              {about.philosophy.preTitle}
            </Typography>
            <Typography
              variant="h3"
              color="primary.main"
              sx={{ fontWeight: 800, mb: 3 }}
            >
              {about.philosophy.title}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ fontSize: "1.1rem", lineHeight: 1.8, mb: 2 }}
            >
              {about.philosophy.subtitle}
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "1.1rem", lineHeight: 1.8, fontWeight: 600, color: "primary.main" }}
            >
              {about.philosophy.subtitle2}
            </Typography>
          </Box>

          {/* Lado Direito - Valores (Renderizado dinamicamente do JSON) */}
          <Box
            sx={{
              flex: 1,
              bgcolor: "#f8fdfe", // Fundo levemente azulado para destacar
              p: { xs: 4, md: 6 },
              borderRadius: "32px",
              border: "1px solid",
              borderColor: "divider",
            }}
          >
            <Stack spacing={4}>
              {about.philosophy.valuesList.map((value, index) => {
                const IconComponent = iconMap[value.icon];

                return (
                  // Animação individual em cascata para cada item da lista
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                  >
                    <Stack direction="row" spacing={3} alignItems="flex-start">
                      {IconComponent && (
                        <IconComponent color="secondary" sx={{ fontSize: 40 }} />
                      )}
                      <Box>
                        <Typography variant="h6" color="primary.main" sx={{ fontWeight: 700 }}>
                          {value.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                          {value.description}
                        </Typography>
                      </Box>
                    </Stack>
                  </motion.div>
                );
              })}
            </Stack>
          </Box>
        </Box>
      </Container>

      {/* --- SEÇÃO FINAL (Our Mission animado) --- */}
      <Box sx={{ bgcolor: "background.default", mb: 10 }}>
        <Container maxWidth="md">
          <Paper
            component={motion.div}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            elevation={0}
            sx={{ 
              p: { xs: 4, md: 6 }, 
              textAlign: "center", 
              borderRadius: "24px",
              border: "1px solid",
              borderColor: "divider"
            }}
          >
            <Typography
              variant="h4"
              color="primary.main"
              sx={{ fontWeight: 800, mb: 3 }}
            >
              {about.mission.title}
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ fontWeight: 400, fontStyle: "italic", lineHeight: 1.8 }}
            >
              {about.mission.subtitle}
            </Typography>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
}