"use client";

import { Box, Typography, Button, Container, Stack } from "@mui/material";

//date
import content from "@/data/homeContent.json"

//images
import heroImage from "@/assets/hero.webp";
import Link from "next/link";

export default function Hero() {
  const { hero } = content.home
  return (
    <Box
      component="section"
      sx={{
        bgcolor: "background.default",
        pt: { xs: 8, md: 12 },
        pb: { xs: 8, md: 12 },
        borderBottom: "1px solid",
        borderColor: "divider",
        display: "flex",
        alignItems: "center",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: 'white',
        height: '100vh',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // Coluna no mobile, linha no desktop
            alignItems: "center",
            gap: { xs: 6, md: 10 }, // Espaço entre o texto e a imagem
          }}
        >
          {/* LADO ESQUERDO: CONTEÚDO */}
          <Box sx={{ flex: 1.2 }}>
            <Stack spacing={3}>
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontWeight: 800,
                  color: "primary.main",
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  lineHeight: 1.1,
                }}
              >
                {hero.title}
              </Typography>

              <Typography
                variant="h4"
                color="inherit"
                sx={{ fontWeight: 400, maxWidth: "540px" }}
              >
                {hero.subtitle}
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ pt: 2 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.8,
                    textTransform: "none",
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    color: "text.primary",
                  }}
                >
                  {hero.button1}
                </Button>
                <Button
                  component={Link}
                  href="/services"
                  variant="outlined"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.8,
                    textTransform: "none",
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                  }}
                >
                  {hero.button2}
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
