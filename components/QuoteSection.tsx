"use client";

import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Stack,
  Paper,
  Alert,
  CircularProgress,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import Image from "next/image";
import PhoneIcon from "@mui/icons-material/Phone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import InstagramIcon from "@mui/icons-material/Instagram";

//images and data
import hero from "@/assets/quote.webp";
import content from "@/data/quoteContent.json";
import Banner from "./layout/Banner";
import SectionTitle from "@/components/ui/SectionTitle";
import PrimaryButton from "@/components/ui/PrimaryButton";
import qrCodeSvg from "@/assets/qr-code.svg";
import logo2Graphic from "@/assets/logo2.png";

// Componente Cartão de Visitas Digital fiel à identidade da FMFC
function BusinessCard() {
  return (
    <Paper
      elevation={4}
      sx={{
        position: "relative",
        overflow: "hidden",
        bgcolor: "#ffffff",
        borderRadius: "16px",
        p: { xs: 3, sm: 3.5 },
        border: "1px solid rgba(0, 0, 0, 0.08)",
        boxShadow: "0 14px 35px rgba(0, 0, 0, 0.07)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 18px 45px rgba(0, 0, 0, 0.12)",
        },
      }}
    >
      {/* Grafismo Geométrico / Logo ocupando 100% da altura do cartão e cortada pela metade */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: { xs: "-16%", sm: "-11%" }, // Metade cortada pela borda direita
          width: { xs: "36%", sm: "34%" },
          height: "100%",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <Image
          src={logo2Graphic}
          alt="FMFC Graphic"
          fill
          style={{ objectFit: "cover", objectPosition: "left center" }}
        />
      </Box>

      {/* Conteúdo do Cartão */}
      <Box sx={{ position: "relative", zIndex: 1, pr: { xs: 9, sm: 11 } }}>
        {/* Título e Slogan Oficial */}
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: 800,
            color: "#6d7278",
            textTransform: "uppercase",
            fontSize: { xs: "0.88rem", sm: "1.05rem" },
            letterSpacing: "0.5px",
            lineHeight: 1.25,
            mb: 0.5,
          }}
        >
          FLORIDA MEDICAL FACILITY CLEANING
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "#858c94",
            fontWeight: 500,
            fontSize: { xs: "0.8rem", sm: "0.92rem" },
            lineHeight: 1.3,
            mb: 2,
          }}
        >
          Your Partner in Environmental Excellence
        </Typography>

        {/* Linha Inferior: QR Code Ampliado + Contatos Rápidos */}
        <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 2, sm: 2.5 } }}>
          {/* QR Code com tamanho ampliado (96px a 108px) para escaneamento instantâneo */}
          <Box
            sx={{
              position: "relative",
              width: { xs: 92, sm: 104 },
              height: { xs: 92, sm: 104 },
              flexShrink: 0,
              borderRadius: "12px",
              border: "2.5px solid #f6af85",
              p: 0.8,
              bgcolor: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 12px rgba(246, 175, 133, 0.15)",
            }}
          >
            <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
              <Image
                src={qrCodeSvg}
                alt="Scan QR Code"
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Box>

          {/* Dados de Contato com Ícones Coloridos */}
          <Stack spacing={0.8}>
            <Box
              component="a"
              href="tel:5612471183"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.2,
                textDecoration: "none",
                color: "#555b62",
                fontWeight: 600,
                fontSize: { xs: "0.82rem", sm: "0.92rem" },
                "&:hover": { color: "primary.main" },
              }}
            >
              <PhoneIcon sx={{ color: "#33beca", fontSize: { xs: 18, sm: 20 } }} />
              (561) 247-1183
            </Box>

            <Box
              component="a"
              href="mailto:cleaning@floridamfc.com"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.2,
                textDecoration: "none",
                color: "#555b62",
                fontWeight: 600,
                fontSize: { xs: "0.82rem", sm: "0.92rem" },
                "&:hover": { color: "primary.main" },
              }}
            >
              <AlternateEmailIcon sx={{ color: "#33beca", fontSize: { xs: 18, sm: 20 } }} />
              cleaning@floridamfc.com
            </Box>

            <Box
              component="a"
              href="https://instagram.com/medicalcleaningfl"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.2,
                textDecoration: "none",
                color: "#555b62",
                fontWeight: 600,
                fontSize: { xs: "0.82rem", sm: "0.92rem" },
                "&:hover": { color: "primary.main" },
              }}
            >
              <InstagramIcon sx={{ color: "#33beca", fontSize: { xs: 18, sm: 20 } }} />
              @medicalcleaningfl
            </Box>
          </Stack>
        </Box>
      </Box>
    </Paper>
  );
}

export default function QuoteSection() {

  const { quote } = content;
  // Estado simples para o formulário (no futuro você pode usar react-hook-form)
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setFeedback({
          type: "success",
          message: quote.form.success || "Thank you! Your quote request has been sent successfully.",
        });
        setFormData({
          name: "",
          businessName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setFeedback({
          type: "error",
          message: result.error || quote.form.error || "An error occurred. Please try again.",
        });
      }
    } catch (err: any) {
      setFeedback({
        type: "error",
        message: quote.form.error || "Failed to send request. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box id="quote" sx={{ bgcolor: "background.default" }}>
      {/* HEADER */}
      <Banner
        title={quote.hero.title}
        subtitle={quote.hero.subtitle}
        img={hero.src}

      />

      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 6, md: 6 },
          }}
        >
          {/* LADO ESQUERDO: INFORMAÇÕES (Ajustado sob medida para o cartão) */}
          <Box sx={{ flex: { xs: 1, md: 0.5 } }}>
            <SectionTitle
              sx={{ fontSize: { xs: "1.8rem", md: "2.2rem" }, mb: 3 }}
            >
              {quote.orientation.title}
            </SectionTitle>
            <Stack spacing={4}>
              {quote.orientation.reasons.map((reason, index) => (
                <Box key={index}>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: "text.secondary" }}>
                    {reason.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {reason.subtitle}
                  </Typography>
                </Box>
              ))}
              {/* Cartão de Visitas Digital (Idêntico ao físico) */}
              <BusinessCard />
            </Stack>
          </Box>

          {/* LADO DIREITO: FORMULÁRIO */}
          <Paper
            elevation={4}
            sx={{
              flex: { xs: 1, md: 1 },
              p: { xs: 4, md: 5 },
              borderRadius: "24px",
            }}
          >
            <form onSubmit={handleSubmit}>
              <Stack spacing={3}>
                {feedback && (
                  <Alert
                    severity={feedback.type}
                    onClose={() => setFeedback(null)}
                    sx={{ borderRadius: "12px", fontSize: "0.95rem" }}
                  >
                    {feedback.message}
                  </Alert>
                )}

                <TextField
                  label={quote.form.name}
                  fullWidth
                  required
                  variant="outlined"
                  value={formData.name}
                  sx={{
                    "& .MuiInputBase-input": { color: "#1a1a1a" },
                    "& .MuiInputLabel-root": { color: "#666" },
                  }}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <TextField
                  label={quote.form.business}
                  fullWidth
                  variant="outlined"
                  value={formData.businessName}
                  sx={{
                    "& .MuiInputBase-input": { color: "#1a1a1a" },
                    "& .MuiInputLabel-root": { color: "#666" },
                  }}
                  onChange={(e) =>
                    setFormData({ ...formData, businessName: e.target.value })
                  }
                />
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    flexDirection: { xs: "column", sm: "row" },
                  }}
                >
                  <TextField
                    label={quote.form.email}
                    fullWidth
                    required
                    type="email"
                    value={formData.email}
                    sx={{
                      "& .MuiInputBase-input": { color: "#1a1a1a" },
                      "& .MuiInputLabel-root": { color: "#666" },
                    }}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                  <TextField
                    label={quote.form.phone}
                    fullWidth
                    value={formData.phone}
                    sx={{
                      "& .MuiInputBase-input": { color: "#1a1a1a" },
                      "& .MuiInputLabel-root": { color: "#666" },
                    }}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </Box>
                <TextField
                  label={quote.form.message}
                  fullWidth
                  multiline
                  rows={4}
                  value={formData.message}
                  sx={{
                    "& .MuiInputBase-input": { color: "#1a1a1a" },
                    "& .MuiInputLabel-root": { color: "#666" },
                  }}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
                <PrimaryButton
                  type="submit"
                  disabled={loading}
                  endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
                  sx={{ py: 2, fontSize: "1.1rem" }}
                >
                  {loading ? "Sending..." : quote.form.submit}
                </PrimaryButton>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  textAlign="center"
                >
                  {quote.form.footer}
                </Typography>
              </Stack>
            </form>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}
