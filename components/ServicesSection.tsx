"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { Box, Container, Typography, Paper, Button, IconButton, Dialog } from "@mui/material";
import { motion } from "framer-motion";

// Ícones
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CleanHandsIcon from "@mui/icons-material/CleanHands";
import SanitizerIcon from "@mui/icons-material/Sanitizer";
import BiotechIcon from "@mui/icons-material/Biotech";
import CloseIcon from "@mui/icons-material/Close";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";

// Dados
import content from "@/data/servicesContent.json";

// Imagem da Hero de Serviços
import hero from "@/assets/services.webp";

// Imagens Específicas dos Serviços
import floorRestoration1 from "@/assets/services/floor_restoration_1.jpg";
import floorRestoration2 from "@/assets/services/floor_restoration_2.jpg";
import profCleaning1 from "@/assets/services/professional_cleaning1.jpg";
import profCleaning2 from "@/assets/services/professional_cleaning2.jpg";
import terminalCleaning1 from "@/assets/services/terminal_cleaning1.jpg";
import terminalCleaning2 from "@/assets/services/terminal_cleaning2.jpg";
import licensedMaintenance1 from "@/assets/services/licensed_maintenance_1.jpg";
import licensedMaintenance2 from "@/assets/services/licensed_maintenance_2.jpg";

// Mapeamento de Ícones
const iconList: Record<string, React.ElementType> = {
  BiotechIcon: BiotechIcon,
  CleanHandsIcon: CleanHandsIcon,
  SanitizerIcon: SanitizerIcon,
  CheckCircleOutlineIcon: CheckCircleOutlineIcon,
  CleaningServicesIcon: CleaningServicesIcon,
};

// Mapeamento de Imagens por Serviço (A chave deve bater com o "title" no JSON)
const serviceImagesMap: Record<string, StaticImageData[]> = {
  "Professional Medical Facility Cleaning": [profCleaning1, profCleaning2],
  "Licensed Maintenance Services": [licensedMaintenance1, licensedMaintenance2],
  "Floor Restoration": [floorRestoration1, floorRestoration2],
  "Terminal Cleaning": [terminalCleaning1, terminalCleaning2],
};

import ParallaxWrapper from "@/components/ParallaxWrapper";

export default function ServicesSection() {
  const { services } = content;

  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(null);

  return (
    // ID FUNDAMENTAL AQUI para o Scroll Spy do Navbar
    <Box id="services" component="section">

      {/* --- HEADER SIMPLIFICADO (Banner Visual) --- */}
      <ParallaxWrapper
        imageSrc={hero.src}
        overlay="linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))"
        speed={0.3}
      >
        <Box
          sx={{
            color: "white",
            py: { xs: 10, md: 15 },
            textAlign: "center",
          }}
        >
          <Container maxWidth="lg">
            <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>
              {services.hero.title}
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.9, maxWidth: "800px", mx: "auto" }}>
              {services.hero.subtitle}
            </Typography>
          </Container>
        </Box>
      </ParallaxWrapper>

      {/* --- GRADE DE SERVIÇOS --- */}
      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 15 } }}>
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
                    flexDirection: "column", // Mantém o layout empilhado verticalmente
                    p: { xs: 4, md: 5 },
                    bgcolor: "#f8fdfe", // Fundo azulado suave
                    border: "1px solid",
                    borderColor: "divider",
                    borderRadius: "24px",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: "0px 20px 40px rgba(0,0,0,0.08)",
                      borderColor: "primary.light",
                      bgcolor: "white", // Clareia levemente ao passar o mouse
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

                  {/* Descrição Principal */}
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ lineHeight: 1.8, fontSize: "1.05rem", mb: 4 }}
                  >
                    {service.description}
                  </Typography>

                  {/* Divisória e Informações Extras (mt: "auto" empurra esse bloco para o rodapé) */}
                  <Box sx={{ mt: "auto", pt: 4, borderTop: "1px solid", borderColor: "divider" }}>

                    {/* Grade de Miniaturas / Imagens Específicas */}
                    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                      {service.title === "Licensed Maintenance Services" ? (
                        // RENDEREZA DOIS BACKGROUNDS COM DEGRADÊ LADO A LADO
                        [1, 2].map((placeholder, i) => (
                          <Box
                            key={i}
                            sx={{
                              width: { xs: "100%", sm: "calc(50% - 8px)" },
                              height: "160px",
                              background: "linear-gradient(135deg, #33beca 0%, #f6af85 100%)",
                              borderRadius: "12px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "white",
                              fontWeight: "bold",
                              opacity: 0.8,
                            }}
                          >
                            Image {placeholder}
                          </Box>
                        ))
                      ) : serviceImagesMap[service.title] ? (
                        // SE EXISTIR IMAGEM PARA ESTE SERVIÇO NO MAPEAMENTO
                        serviceImagesMap[service.title].slice(0, 2).map((img, i) => (
                          <Box
                            key={i}
                            onClick={() => setSelectedImage(img)}
                            sx={{
                              width: { xs: "100%", sm: "calc(50% - 8px)" },
                              height: "160px",
                              position: "relative", // Necessário para o Next Image com 'fill'
                              borderRadius: "12px",
                              overflow: "hidden", // Impede que a foto vaze pelas bordas arredondadas
                              transition: "opacity 0.2s ease",
                              "&:hover": { opacity: 0.8 },
                            }}
                          >
                            <Image
                              src={img}
                              alt={`${service.title} detalhe ${i + 1}`}
                              fill
                              style={{ objectFit: "cover" }}
                              sizes="(max-width: 600px) 100vw, 50vw"
                            />
                          </Box>
                        ))
                      ) : (
                        // SE NÃO EXISTIR, MANTÉM OS PLACEHOLDERS ESTILIZADOS
                        [1, 2].map((placeholder, i) => (
                          <Box
                            key={i}
                            sx={{
                              width: { xs: "100%", sm: "calc(50% - 8px)" },
                              height: "160px",
                              bgcolor: "rgba(0,0,0,0.05)",
                              borderRadius: "12px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "text.disabled",
                              fontSize: "0.8rem",
                              fontWeight: "bold",
                            }}
                          >
                            Image {placeholder}
                          </Box>
                        ))
                      )}
                    </Box>
                  </Box>
                </Paper>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}