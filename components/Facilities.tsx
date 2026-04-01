"use client";

import { Box, Typography, Container, Stack, Paper } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business"; // Ícone genérico de instalação
import LocalHospitalIcon from "@mui/icons-material/LocalHospital"; // Ícone de hospital
import OpacityIcon from "@mui/icons-material/Opacity"; // Ícone para diálise/outros

//data
import content from "@/data/homeContent.json";
import React from "react";

//Icons
const iconList: Record<string, React.ElementType> = {
  "Medical Units": LocalHospitalIcon,
  "Surgery & Dialysis": BusinessIcon,
  "Specialized Centers": OpacityIcon,
};

export default function Facilities() {
  const { facilities } = content.home;
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 15 },
        bgcolor: "white",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={6}>
          {/* CABEÇALHO DA SEÇÃO */}
          <Stack
            spacing={1}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography
              variant="overline"
              sx={{
                color: "secondary.main",
                fontWeight: "bold",
                letterSpacing: 2,
                display: "block",
              }}
            >
              {facilities.preTitle}
            </Typography>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 800,
                color: "primary.main",
                fontSize: { xs: "2.3rem", md: "3.3rem" },
                lineHeight: 1.1,
              }}
            >
              {facilities.title}
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ fontWeight: 400, maxWidth: "650px", mx: "auto", pt: 1 }}
            >
              {facilities.subtitle}
            </Typography>
          </Stack>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 3,
              justifyContent: "center",
            }}
          >
            {facilities.facilitiesList.map((facility, index) => {
              const IconComponent = iconList[facility.category];

              return (
                <Paper
                  key={index}
                  elevation={0}
                  sx={{
                    width: {
                      xs: "100%",
                      sm: "calc(50% - 24px)",
                      md: "calc(33.33% - 24px)",
                    },
                    p: 4,
                    bgcolor: "#f8fdfe", // Um tom azulado bem leve para o fundo do card
                    borderRadius: "20px",
                    border: "1px solid",
                    borderColor: "divider",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      bgcolor: "white",
                      boxShadow: "0px 20px 40px rgba(0,0,0,0.08)",
                      transform: "translateY(-8px)",
                      borderColor: "primary.light",
                    },
                  }}
                >
                  <Stack spacing={2}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
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
                        {facility.category}
                      </Typography>
                    </Box>

                    <Box component="ul" sx={{ m: 0, p: 0, listStyle: "none" }}>
                      {facility.items.map((item, idx) => (
                        <Typography
                          key={idx}
                          component="li"
                          variant="body2"
                          sx={{
                            py: 0.5,
                            color: "text.secondary",
                            display: "flex",
                            alignItems: "center",
                            "&::before": {
                              content: '""',
                              width: "6px",
                              height: "6px",
                              bgcolor: "secondary.main",
                              borderRadius: "50%",
                              display: "inline-block",
                              mr: 1.5,
                            },
                          }}
                        >
                          {item}
                        </Typography>
                      ))}
                    </Box>
                  </Stack>
                </Paper>
              );
            })}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
