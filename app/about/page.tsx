"use client";

import {
  Box,
  Container,
  Typography,
  Stack,
  Paper,
} from "@mui/material";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import GroupsIcon from "@mui/icons-material/Groups";

//data
import content from "@/data/aboutContent.json"

//images
import hero from "@/assets/about.webp";

export default function AboutPage() {
  const { about } = content
  return (
    <main>
      {/* HEADER SIMPLIFICADO */}
      <Box
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${hero.src})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          color: "white",
          pt: 20,
          pb: 10,
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ fontWeight: 800, mb: 2 }}>
            {about.hero.title}
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, maxWidth: "800px" }}>
            {about.hero.subtitle}
          </Typography>
        </Container>
      </Box>

      {/* NOSSA FILOSOFIA (O coração do site original) */}
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 8,
            alignItems: "center",
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="overline"
              color="secondary.main"
              sx={{ fontWeight: "bold" }}
            >
              {about.philosophy.preTitle}
            </Typography>
            <Typography
              variant="h3"
              color="primary.main"
              sx={{ fontWeight: 800, mb: 3 }}
            >
              {about.philosophy.title}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}
            >
              {about.philosophy.subtitle}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ fontSize: "1.1rem", lineHeight: 1.8, fontWeight: 500 }}
            >
              {about.philosophy.subtitle2}
            </Typography>
          </Box>

          <Box
            sx={{
              flex: 1,
              bgcolor: "background.default",
              p: 6,
              borderRadius: "32px",
              border: "1px solid",
              borderColor: "divider",
            }}
          >
            <Stack spacing={4}>
              <Stack direction="row" spacing={3} alignItems="flex-start">
                <VerifiedUserIcon color="primary" sx={{ fontSize: 40 }} />
                <Box>
                  <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 700 }}>
                    Strict Training
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Every team member undergoes rigorous training in
                    medical-grade sanitation.
                  </Typography>
                </Box>
              </Stack>
              <Stack direction="row" spacing={3} alignItems="flex-start">
                <GroupsIcon color="primary" sx={{ fontSize: 40 }} />
                <Box>
                  <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 700 }}>
                    Expert Teams
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    We specialize only in medical facilities, understanding your
                    unique needs.
                  </Typography>
                </Box>
              </Stack>
              <Stack direction="row" spacing={3} alignItems="flex-start">
                <HistoryEduIcon color="primary" sx={{ fontSize: 40 }} />
                <Box>
                  <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 700 }}>
                    Proven Track Record
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Years of experience serving MRI centers and surgical units
                    across Florida.
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Container>

      {/* SEÇÃO DE DIFERENCIAL (MISSAO/VISAO) */}
      <Box sx={{ bgcolor: "background.default", py: 12 }}>
        <Container maxWidth="md">
          <Paper
            elevation={0}
            sx={{ p: 6, textAlign: "center", borderRadius: "24px" }}
          >
            <Typography
              variant="h4"
              color="primary.main"
              sx={{ fontWeight: 800, mb: 3 }}
            >
              {about.mission.title}
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ fontWeight: 400, fontStyle: "italic" }}
            >
              {about.mission.subtitle}
            </Typography>
          </Paper>
        </Container>
      </Box>
    </main>
  );
}
