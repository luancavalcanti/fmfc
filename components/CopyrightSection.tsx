"use client";

import { Box, Container, Typography, Stack, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function CopyrightSection() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="section"
      sx={{
        bgcolor: "#3d3d3d", // Mesma cor escura da Navbar
        color: "white",
        py: 2,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          {/* Lado Esquerdo: Texto de Copyright */}
          <Typography variant="body2" sx={{ opacity: 0.8, textAlign: { xs: "center", md: "left" } }}>
            © {currentYear} Florida Medical Facility Cleaning. All Rights Reserved. Licensed & Insured.
          </Typography>

          {/* Lado Direito: Ícones de Mídia Social */}
          <Stack direction="row" spacing={1} justifyContent={{ xs: "center", md: "flex-end" }}>
            <IconButton size="small" sx={{ color: "white", bgcolor: "rgba(255,255,255,0.1)", "&:hover": { bgcolor: "rgba(255,255,255,0.2)" } }}>
              <FacebookIcon fontSize="small" />
            </IconButton>
            <IconButton size="small" sx={{ color: "white", bgcolor: "rgba(255,255,255,0.1)", "&:hover": { bgcolor: "rgba(255,255,255,0.2)" } }}>
              <InstagramIcon fontSize="small" />
            </IconButton>
            <IconButton size="small" sx={{ color: "white", bgcolor: "rgba(255,255,255,0.1)", "&:hover": { bgcolor: "rgba(255,255,255,0.2)" } }}>
              <LinkedInIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
