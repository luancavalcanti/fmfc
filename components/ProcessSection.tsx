"use client";

import React from "react";
import { Box, Container, Typography, Stack, Paper } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import content from "@/data/processContent.json";
import PreTitle from "@/components/ui/PreTitle";
import SectionTitle from "@/components/ui/SectionTitle";

import step1Img from "@/assets/process/step_1.jpg";
import step2Img from "@/assets/process/step_2.jpg";
import step3Img from "@/assets/process/step_3.jpg";
import step4Img from "@/assets/process/step_4.jpg";
import step5Img from "@/assets/process/step_5.jpg";

const stepImages = [step1Img, step2Img, step3Img, step4Img, step5Img];

export default function ProcessSection() {
  const { process } = content;
  const steps = process.steps;
  return (
    <Box
      id="process"
      component="section"
      sx={{
        py: { xs: 8, md: 10 },
        bgcolor: "white",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={6}>
          <Stack spacing={1} sx={{ textAlign: "center" }}>
            <PreTitle>
              {process.preTitle}
            </PreTitle>
            <SectionTitle>
              {process.title}
            </SectionTitle>
          </Stack>

          <Box sx={{ position: "relative", mt: 4 }}>
            <Stack spacing={4}>
              {steps.map((step, index) => {
                const isEven = index % 2 === 0;
                return (
                  <Box
                    component={motion.div}
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" },
                      alignItems: { xs: "center", md: "stretch" },
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    {/* Número no mobile */}
                    <Box
                      sx={{
                        display: { xs: "flex", md: "none" },
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        bgcolor: "secondary.main",
                        color: "white",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "bold",
                        fontSize: "1.2rem",
                        mb: 2,
                        zIndex: 1,
                      }}
                    >
                      {index + 1}
                    </Box>

                    {/* Lado Esquerdo (Desktop) */}
                    <Box
                      sx={{
                        flex: 1,
                        display: { xs: "none", md: "flex" },
                        justifyContent: "flex-end",
                        pr: 6,
                        textAlign: "right",
                      }}
                    >
                      {isEven ? (
                        <Paper
                          elevation={0}
                          sx={{
                            p: 4,
                            borderRadius: "20px",
                            border: "1px solid",
                            borderColor: "divider",
                            bgcolor: "background.default",
                            width: "100%",
                            maxWidth: "450px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                          }}
                        >
                          <Typography variant="h5" sx={{ fontWeight: 700, color: "primary.main", mb: 1 }}>
                            {step.title}
                          </Typography>
                          <Typography variant="body1" color="text.secondary">
                            {step.description}
                          </Typography>
                        </Paper>
                      ) : (
                        <Box
                          sx={{
                            width: "100%",
                            maxWidth: "450px",
                            height: "100%",
                            position: "relative",
                            borderRadius: "20px",
                            overflow: "hidden",
                            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                            "&::after": {
                              content: '""',
                              position: "absolute",
                              top: 0, left: 0, right: 0, bottom: 0,
                              bgcolor: "primary.main",
                              opacity: 0.15, // Tint azulado normal (sem escurecer)
                              pointerEvents: "none"
                            }
                          }}
                        >
                          <Image
                            src={stepImages[index]}
                            alt={step.title}
                            fill
                            style={{ objectFit: "cover", filter: "brightness(1.25) saturate(0.5) contrast(0.95)" }}
                            sizes="(max-width: 900px) 0vw, 450px"
                          />
                        </Box>
                      )}
                    </Box>

                    {/* Linha para cima (Desktop) */}
                    {index !== 0 && (
                      <Box
                        sx={{
                          display: { xs: "none", md: "block" },
                          position: "absolute",
                          left: "50%",
                          top: "-32px",
                          bottom: "50%",
                          width: "2px",
                          bgcolor: "divider",
                          transform: "translateX(-50%)",
                          zIndex: 0,
                        }}
                      />
                    )}

                    {/* Linha para baixo (Desktop) */}
                    {index !== steps.length - 1 && (
                      <Box
                        sx={{
                          display: { xs: "none", md: "block" },
                          position: "absolute",
                          left: "50%",
                          top: "50%",
                          bottom: "-32px",
                          width: "2px",
                          bgcolor: "divider",
                          transform: "translateX(-50%)",
                          zIndex: 0,
                        }}
                      />
                    )}

                    {/* Número no centro (Desktop) */}
                    <Box
                      sx={{
                        display: { xs: "none", md: "flex" },
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        bgcolor: "secondary.main",
                        color: "white",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "bold",
                        fontSize: "1.2rem",
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                        zIndex: 2,
                        boxShadow: "0 0 0 8px #ffffff",
                      }}
                    >
                      {index + 1}
                    </Box>

                    {/* Lado Direito (Desktop) */}
                    <Box
                      sx={{
                        flex: 1,
                        display: { xs: "none", md: "flex" },
                        justifyContent: "flex-start",
                        pl: 6,
                        textAlign: "left",
                      }}
                    >
                      {!isEven ? (
                        <Paper
                          elevation={0}
                          sx={{
                            p: 4,
                            borderRadius: "20px",
                            border: "1px solid",
                            borderColor: "divider",
                            bgcolor: "background.default",
                            width: "100%",
                            maxWidth: "450px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                          }}
                        >
                          <Typography variant="h5" sx={{ fontWeight: 700, color: "primary.main", mb: 1 }}>
                            {step.title}
                          </Typography>
                          <Typography variant="body1" color="text.secondary">
                            {step.description}
                          </Typography>
                        </Paper>
                      ) : (
                        <Box
                          sx={{
                            width: "100%",
                            maxWidth: "450px",
                            height: "100%",
                            position: "relative",
                            borderRadius: "20px",
                            overflow: "hidden",
                            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                            "&::after": {
                              content: '""',
                              position: "absolute",
                              top: 0, left: 0, right: 0, bottom: 0,
                              bgcolor: "primary.main",
                              opacity: 0.15,
                              pointerEvents: "none"
                            }
                          }}
                        >
                          <Image
                            src={stepImages[index]}
                            alt={step.title}
                            fill
                            style={{ objectFit: "cover", filter: "brightness(1.25) saturate(0.5) contrast(0.95)" }}
                            sizes="(max-width: 900px) 0vw, 450px"
                          />
                        </Box>
                      )}
                    </Box>

                    {/* Card no Mobile */}
                    <Box
                      sx={{
                        display: { xs: "block", md: "none" },
                        width: "100%",
                      }}
                    >
                      <Paper
                        elevation={0}
                        sx={{
                          p: 4,
                          borderRadius: "20px",
                          border: "1px solid",
                          borderColor: "divider",
                          bgcolor: "background.default",
                          textAlign: "center",
                          overflow: "hidden", // Para a imagem não vazar nos cantos
                        }}
                      >
                        <Box
                          sx={{
                            width: "100%",
                            height: "200px",
                            position: "relative",
                            borderRadius: "12px",
                            overflow: "hidden",
                            mb: 3,
                            "&::after": {
                              content: '""',
                              position: "absolute",
                              top: 0, left: 0, right: 0, bottom: 0,
                              bgcolor: "primary.main",
                              opacity: 0.15,
                              pointerEvents: "none"
                            }
                          }}
                        >
                          <Image
                            src={stepImages[index]}
                            alt={step.title}
                            fill
                            style={{ objectFit: "cover", filter: "brightness(1.25) saturate(0.5) contrast(0.95)" }}
                            sizes="(max-width: 600px) 100vw, 0vw"
                          />
                        </Box>
                        <Typography variant="h6" sx={{ fontWeight: 700, color: "primary.main", mb: 1 }}>
                          {step.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {step.description}
                        </Typography>
                      </Paper>
                    </Box>

                  </Box>
                );
              })}
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
