"use client";
import React, { useState, useEffect } from "react";
import { Fab, Zoom } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Exibe o botão após 400 pixels de rolagem
      if (window.scrollY > 400) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Zoom in={show}>
      <Fab
        color="secondary"
        size="medium"
        onClick={handleClick}
        aria-label="Voltar ao topo"
        sx={{
          position: "fixed",
          bottom: { xs: 20, md: 30 },
          right: { xs: 20, md: 30 },
          zIndex: 9999, // Garante que ficará acima de qualquer modal ou seção
          color: "white",
          boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
          "&:hover": {
            bgcolor: "secondary.dark",
            transform: "translateY(-3px)",
          },
          transition: "all 0.3s ease",
        }}
      >
        <KeyboardArrowUpIcon fontSize="medium" />
      </Fab>
    </Zoom>
  );
}
