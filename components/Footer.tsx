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

//images and data
import logo from "@/assets/logo_white.webp";
import Link from "next/link";
import content from "@/data/quoteContent.json"

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { quote } = content
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
              Professional Cleaning and Construction Services for Medical Facilities.
            </Typography>
          </Box>

          <Box sx={{ flex: 1.5 }}>
            <Button
              component={Link}
              href="/#quote"
              variant="contained"
              sx={{
                bgcolor: "white",
                color: "primary.main",
                fontWeight: "bold",
                boxShadow: 0,
                borderRadius: 16,
                width: "250px",
                mt: 2,
                "&:hover": { bgcolor: "primary.light", color: "white", boxShadow: 0 },
              }}
            >
              Request a Free Quote
            </Button>
          </Box>

          {/* COLUNA 3: CONTATO */}
          <Box sx={{ flex: 1.5 }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              CONTACT US
            </Typography>
            <Stack spacing={2}>
              <Stack direction="row" spacing={2} alignItems="center">
                <PhoneIcon fontSize="small" />
                <Typography variant="body1">{quote.orientation.contact.phone}</Typography>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center">
                <EmailIcon fontSize="small" />
                <Typography variant="body1">{quote.orientation.contact.email}</Typography>
              </Stack>
            </Stack>
          </Box>

        </Box>
      </Container>
    </Box>
  );
}
