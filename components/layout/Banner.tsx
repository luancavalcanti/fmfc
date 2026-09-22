import React from "react";
import { Box, Container, Typography } from "@mui/material";
import ParallaxWrapper from "@/components/ParallaxWrapper";

interface BannerProps {
  title: string;
  subtitle: string;
  img: string; // URL da imagem, já que não temos as imagens reais
}

export default function Banner({ title, subtitle, img }: BannerProps) {
  return (
    <ParallaxWrapper
      imageSrc={img}
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
        <Container maxWidth="md">
          <Typography variant="h2" sx={{ fontWeight: 800, mb: 2 }}>
            {title}
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9 }}>
            {subtitle}
          </Typography>
        </Container>
      </Box>
    </ParallaxWrapper>
  );
}
