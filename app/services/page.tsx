"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Paper,
  Button,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CleanHandsIcon from "@mui/icons-material/CleanHands";
import SanitizerIcon from "@mui/icons-material/Sanitizer";
import BiotechIcon from "@mui/icons-material/Biotech";

//data
import content from "@/data/servicesContent.json";
//images
import hero from "@/assets/services.webp";

const iconList: Record<string, React.ElementType> = {
  "BiotechIcon": BiotechIcon,
  "CleanHandsIcon": CleanHandsIcon,
  "SanitizerIcon": SanitizerIcon,
  "CheckCircleOutlineIcon": CheckCircleOutlineIcon,
};

export default function ServicesPage() {
  const { services } = content;
  return (
    <main>
      {/* HERO SECTION */}
      <Box
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${hero.src})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          color: "white",
          pt: 20,
          pb: 20,
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ fontWeight: 800, mb: 2 }}>
            {services.hero.title}
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, maxWidth: "700px" }}>
            {services.hero.subtitle}
          </Typography>
        </Container>
      </Box>

      {/* GRADE DE SERVIÇOS DETALHADOS */}
      <Container maxWidth="lg" sx={{ py: 15 }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
          }}
        >
          {services.servicesList.map((service, index) => {
            const IconComponent = iconList[service.icon];

            return (
              <Paper
                key={index}
                elevation={0}
                sx={{
                  flex: { xs: "1 1 100%", md: "1 1 calc(50% - 32px)" },
                  p: 5,
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: "24px",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "translateY(-8px)", boxShadow: 6 },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
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
                  sx={{ lineHeight: 1.8, fontSize: "1.1rem" }}
                >
                  {service.description}
                </Typography>
              </Paper>
            );
          })}
        </Box>
      </Container>

      {/* SECCTION CALL TO ACTION */}
      <Box
        sx={{
          bgcolor: "#fff",
          py: 10,
          color: "text.secondary",
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 3 }}>
            {services.callToAction.title}
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            {services.callToAction.subtitle}
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: "secondary.main",
              color: "text.primary",
              fontWeight: "bold",
              px: 6,
              py: 2,
              "&:hover": { bgcolor: "#f0f0f0" },
            }}
          >
            {services.callToAction.button}
          </Button>
        </Container>
      </Box>
    </main>
  );
}
