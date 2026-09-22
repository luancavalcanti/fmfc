"use client";

import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";

interface ParallaxWrapperProps {
  imageSrc: string;
  overlay?: string;
  children: React.ReactNode;
  speed?: number; // 0.1 a 0.9. Quanto menor, mais sutil o movimento.
  backgroundPosition?: string; // Permite ajustar a posição inicial do background
}

export default function ParallaxWrapper({
  imageSrc,
  overlay,
  children,
  speed = 0.4,
  backgroundPosition = "center",
}: ParallaxWrapperProps) {
  const bgRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!bgRef.current || !containerRef.current) return;
      
      // Pega a posição do container em relação à tela
      const rect = containerRef.current.getBoundingClientRect();
      
      // Calcula o deslocamento do centro da tela para suavizar o efeito
      const windowCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      const distanceFromCenter = windowCenter - elementCenter;

      // Move a imagem no eixo Y baseado na distância
      const yOffset = distanceFromCenter * speed;
      
      bgRef.current.style.transform = `translate3d(0, ${-yOffset}px, 0)`;
    };

    const onScroll = () => {
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll);
    // Dispara uma vez no mount para posicionar logo de cara
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed]);

  return (
    <Box ref={containerRef} component="section" sx={{ position: "relative", overflow: "hidden" }}>
      {/* Container da Imagem que vai receber o Parallax */}
      <Box
        ref={bgRef}
        sx={{
          position: "absolute",
          top: "-30%",
          left: 0,
          right: 0,
          bottom: "-30%",
          backgroundImage: `${overlay ? overlay + ", " : ""}url(${imageSrc})`,
          backgroundSize: "cover",
          backgroundPosition: backgroundPosition,
          zIndex: 0,
          // Evita recálculos de layout pesados
          willChange: "transform",
        }}
      />

      {/* Conteúdo (fica por cima da imagem) */}
      <Box sx={{ position: "relative", zIndex: 1, width: "100%", height: "100%" }}>
        {children}
      </Box>
    </Box>
  );
}
