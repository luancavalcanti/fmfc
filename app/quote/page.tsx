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
  Grid as Grid,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

//images
import hero from "@/assets/quote.webp";

export default function QuotePage() {
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
            Request a Quote
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, maxWidth: "600px" }}>
            Complete the form below and our team will contact you to discuss
            your facility is unique cleaning needs.
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
              Why Choose FMFC?
            </Typography>
            <Stack spacing={4}>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 700, color: "text.secondary" }}>
                  Customized Service
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Every office has unique needs. We tailor our protocols to your
                  specific medical specialty.
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 700, color: "text.secondary" }}>
                  Fast Response
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Your time is valuable. We make sure to get back to you as soon
                  as possible.
                </Typography>
              </Box>
              <Paper
                elevation={1}
                sx={{
                  bgcolor: "white",
                  p: 2,
                  borderRadius: "16px",
                }}
              >
                <Typography
                  variant="h6"
                  color="secondary"
                  sx={{ fontWeight: 700 }}
                >
                  Direct Contact
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Phone: 561-247-1183
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Email: richmond@floridamfc.com
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
                  label="Full Name"
                  fullWidth
                  required
                  variant="outlined"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <TextField
                  label="Business Name"
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
                    label="Email Address"
                    fullWidth
                    required
                    type="email"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                  <TextField
                    label="Phone Number"
                    fullWidth
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </Box>
                <TextField
                  label="Tell us about your facility (e.g. Size, Type of Clinic)"
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
                  }}
                >
                  Submit Request
                </Button>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  textAlign="center"
                >
                  By submitting, you agree to our privacy policy. We will never
                  share your information.
                </Typography>
              </Stack>
            </form>
          </Paper>
        </Box>
      </Container>
    </main>
  );
}
