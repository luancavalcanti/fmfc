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
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

//images and data
import hero from "@/assets/quote.webp";
import content from "@/data/quoteContent.json";

export default function QuotePage() {

  const { quote } = content;
  // Estado simples para o formulário (no futuro você pode usar react-hook-form)
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados do Orçamento:", formData);
    alert("Thank you! Your request has been sent to FMFC.");
  };

  return (
    <main>
      {/* HEADER */}
      <Box
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${hero.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          pt: 20,
          pb: 8,
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ fontWeight: 800, mb: 2 }}>
            {quote.hero.title}
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, maxWidth: "600px" }}>
            {quote.hero.subtitle}
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 8,
          }}
        >
          {/* LADO ESQUERDO: INFORMAÇÕES */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h4"
              color="primary.main"
              sx={{ fontWeight: 700, mb: 3 }}
            >
              {quote.orientation.title}
            </Typography>
            <Stack spacing={4}>
              {quote.orientation.reasons.map((reason, index) => (
                <Box  key={index}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: "text.secondary" }}>
                  {reason.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {reason.subtitle}
                </Typography>
              </Box>
              ))}
              <Paper
                elevation={1}
                sx={{
                  bgcolor: "white",
                  p: 4,
                  borderRadius: "16px",
                }}
              >
                <Typography
                  variant="h6"
                  color="secondary"
                  sx={{ fontWeight: 700 }}
                >
                  {quote.orientation.contact.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {quote.orientation.contact.phone}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {quote.orientation.contact.email}
                </Typography>
              </Paper>
            </Stack>
          </Box>

          {/* LADO DIREITO: FORMULÁRIO */}
          <Paper
            elevation={4}
            sx={{
              flex: 1.5,
              p: { xs: 4, md: 6 },
              borderRadius: "24px",
            }}
          >
            <form onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <TextField
                  label={quote.form.name}
                  fullWidth
                  required
                  variant="outlined"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <TextField
                  label={quote.form.business}
                  fullWidth
                  required
                  variant="outlined"
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
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                  <TextField
                    label={quote.form.phone}
                    fullWidth
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
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  endIcon={<SendIcon />}
                  sx={{
                    py: 2,
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    textTransform: "none",
                    color: "white",
                    bgcolor: "secondary.main",
                  }}
                >
                  {quote.form.submit}
                </Button>
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
    </main>
  );
}
