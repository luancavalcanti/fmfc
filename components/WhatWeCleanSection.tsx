"use client";
import React from "react";
import { Box, Typography, Container, Stack, Paper } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import OpacityIcon from "@mui/icons-material/Opacity";
import { motion } from "framer-motion";
import content from "@/data/whatWeCleanContent.json";

const facilityIcons = {
  "Medical Units": LocalHospitalIcon,
  "Surgery & Dialysis": BusinessIcon,
  "Specialized Centers": OpacityIcon,
};

export default function WhatWeCleanSection() {
  const { facilities } = content;

  return (
    <>
      {/* --- 2. WHAT WE CLEAN SECTION --- */}
      <Box
        id="facilities"
        component="section"
        sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.default" }}
      >
        <Container maxWidth="lg">
          <Stack spacing={6}>
            <Stack
              spacing={1}
              sx={{ textAlign: "center", alignItems: "center" }}
            >
              <Typography
                variant="overline"
                sx={{
                  color: "secondary.main",
                  fontWeight: "bold",
                  letterSpacing: 2,
                }}
              >
                {facilities.preTitle}
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  color: "primary.main",
                  fontSize: { xs: "2.3rem", md: "3.3rem" },
                }}
              >
                {facilities.title}
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ fontWeight: 400, maxWidth: "650px", pt: 1 }}
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
                const IconComponent = facilityIcons[facility.category];
                return (
                  <Box
                    component={motion.div}
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.15,
                      ease: "easeOut",
                    }}
                    sx={{
                      width: {
                        xs: "100%",
                        sm: "300px",
                      },
                      display: "flex",
                      justifyContent: "space-around",
                    }}
                  >
                    <Paper
                      key={index}
                      elevation={0}
                      sx={{
                        width: "100%",
                        p: 4,
                        bgcolor: "#f8fdfe",
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
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 2 }}
                        >
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
                        <Box
                          component="ul"
                          sx={{ m: 0, p: 0, listStyle: "none" }}
                        >
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
                  </Box>
                );
              })}
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
