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

// Dados
import content from "@/data/servicesContent.json";

// Imagem da Hero de Serviços
import hero from "@/assets/services.webp";

// Imagens Específicas dos Serviços
import wax1 from "@/assets/services/wax1.webp";
import wax2 from "@/assets/services/wax2.webp";
import wax3 from "@/assets/services/wax3.webp";

// Mapeamento de Ícones
const iconList: Record<string, React.ElementType> = {
  BiotechIcon: BiotechIcon,
  CleanHandsIcon: CleanHandsIcon,
  SanitizerIcon: SanitizerIcon,
  CheckCircleOutlineIcon: CheckCircleOutlineIcon,
};

// Mapeamento de Imagens por Serviço (A chave deve bater com o "title" no JSON)
const serviceImagesMap: Record<string, StaticImageData[]> = {
  "Medical Floor Care": [wax1, wax2, wax3],
  // Quando tiver mais fotos, adicione assim:
  // "Terminal Cleaning": [img1, img2, img3],
};

export default function ServicesSection() {
  const { services } = content;

  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(null);

  return (
    // ID FUNDAMENTAL AQUI para o Scroll Spy do Navbar
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
          <Typography variant="h6" sx={{ opacity: 0.9, maxWidth: "800px", mx: "auto" }}>
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
                      {serviceImagesMap[service.title] ? (
                        // SE EXISTIR IMAGEM PARA ESTE SERVIÇO NO MAPEAMENTO
                        serviceImagesMap[service.title].map((img, i) => (
                          <Box
                            key={i}
                            onClick={() => setSelectedImage(img)}
                            sx={{
                              width: { xs: "100%", sm: "calc(33.333% - 11px)" },
                              height: "100px",
                              position: "relative", // Necessário para o Next Image com 'fill'
                              borderRadius: "12px",
                              overflow: "hidden", // Impede que a foto vaze pelas bordas arredondadas
                              cursor: "pointer",
                              transition: "opacity 0.2s ease",
                              "&:hover": { opacity: 0.8 },
                            }}
                          >
                            <Image
                              src={img}
                              alt={`${service.title} detalhe ${i + 1}`}
                              fill
                              style={{ objectFit: "cover" }}
                              sizes="(max-width: 600px) 100vw, 33vw"
                            />
                          </Box>
                        ))
                      ) : (
                        // SE NÃO EXISTIR, MANTÉM OS PLACEHOLDERS ESTILIZADOS
                        [1, 2, 3].map((placeholder, i) => (
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

      {/* --- CALL TO ACTION --- */}
      <Box sx={{ bgcolor: "background.default", pb: { xs: 10, md: 12 } }}>
        <Container maxWidth="md">
          <Paper
            elevation={0}
            sx={{
              p: { xs: 4, md: 6 },
              textAlign: "center",
              borderRadius: "24px",
              border: "1px solid",
              borderColor: "divider",
              bgcolor: "white"
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 3, color: "primary.main" }}>
              {services.callToAction.title}
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 4, fontWeight: 400 }}>
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
                color: "text.primary", // Texto escuro contrastando com o botão laranja
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
        </Container>
      </Box>
      {/* ==================================== */}
      {/* MODAL DE IMAGEM EXPANDIDA            */}
      {/* ==================================== */}
      <Dialog
        open={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            bgcolor: "transparent",
            boxShadow: "none",
            overflow: "hidden",
          }
        }}
      >
        {selectedImage && (
          <Box sx={{ position: "relative", width: "100%", height: "80vh" }}>
            <IconButton
              onClick={() => setSelectedImage(null)}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                color: "white",
                bgcolor: "rgba(0,0,0,0.5)", // Fundo escurinho no botão para dar contraste
                zIndex: 10,
                "&:hover": { bgcolor: "rgba(0,0,0,0.8)" }
              }}
            >
              <CloseIcon />
            </IconButton>
            <Image
              src={selectedImage}
              alt="Expanded view"
              fill
              style={{ objectFit: "contain" }} // contain garante que a imagem não seja cortada
            />
          </Box>
        )}
      </Dialog>
      
    </Box>
  );
}