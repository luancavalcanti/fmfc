"use client";

import {
  Box,
  Container,
  Typography,
  Stack,
  IconButton,
  Divider,
  Button,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import Image from "next/image";

//images
import logo from "@/assets/logo_white.webp";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#33beca",
        color: "white",
        pt: 10,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            gap: 6,
            mb: 6,
          }}
        >
          {/* COLUNA 1: SOBRE / LOGO */}
          <Box sx={{ flex: 1.5 }}>
            <Image
              src={logo}
              alt="FMFC Logo"
              style={{ marginBottom: "20px", width: 150, height: "auto" }}
            />
            <Typography
              variant="body2"
              sx={{ maxWidth: "300px", mb: 3, opacity: 0.9 }}
            >
              Florida Medical Facility Cleaning. Providing professional grade
              sanitation and disinfection for healthcare providers across
              Florida.
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton
                sx={{ color: "white", bgcolor: "rgba(255,255,255,0.1)" }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                sx={{ color: "white", bgcolor: "rgba(255,255,255,0.1)" }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                sx={{ color: "white", bgcolor: "rgba(255,255,255,0.1)" }}
              >
                <LinkedInIcon />
              </IconButton>
            </Stack>
          </Box>

          {/* COLUNA 2: LINKS RÁPIDOS */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              <Typography
                variant="body2"
                component="a"
                href="#"
                sx={{
                  color: "white",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Medical Cleaning Services
              </Typography>
              <Typography
                variant="body2"
                component="a"
                href="#"
                sx={{
                  color: "white",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Compliance & Standards
              </Typography>
              <Typography
                variant="body2"
                component="a"
                href="#"
                sx={{
                  color: "white",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Before & After Photos
              </Typography>
              <Typography
                variant="body2"
                component="a"
                href="#"
                sx={{
                  color: "white",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                About Our Philosophy
              </Typography>
            </Stack>
          </Box>

          {/* COLUNA 3: CONTATO */}
          <Box sx={{ flex: 1.5 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Contact Us
            </Typography>
            <Stack spacing={2}>
              <Stack direction="row" spacing={2} alignItems="center">
                <PhoneIcon fontSize="small" />
                <Typography variant="body2">561-247-1183</Typography>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center">
                <EmailIcon fontSize="small" />
                <Typography variant="body2">richmond@floridamfc.com</Typography>
              </Stack>
              <Button
                component={Link}
                href="/quote"
                variant="contained"
                sx={{
                  bgcolor: "secondary.main",
                  color: "text.primary",
                  fontWeight: "bold",
                  width: "250px",
                  mt: 2,
                  "&:hover": { bgcolor: "rgba(255,255,255,0.9)" },
                }}
              >
                Request a Free Quote
              </Button>
            </Stack>
          </Box>
        </Box>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.2)", mb: 4 }} />

        {/* COPYRIGHT */}
        <Box sx={{ textAlign: "center", opacity: 0.8 }}>
          <Typography variant="caption">
            © {currentYear} Florida Medical Facility Cleaning. All Rights
            Reserved. Licensed & Insured.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
