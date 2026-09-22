import React from "react";
import { Typography, TypographyProps } from "@mui/material";

interface TitleProps extends TypographyProps {
  children: React.ReactNode;
  customColor?: string; // Permitir cor customizada
}

export default function Title({ children, customColor, sx, ...props }: TitleProps) {
  return (
    <Typography
      variant="h2"
      component="h1"
      sx={{
        fontWeight: 900,
        color: customColor || "primary", // Cor padrão se não fornecida
        fontSize: { xs: "2rem", md: "2.5rem", lg: "3.5rem" },
        lineHeight: 1.1,
        letterSpacing: "-1px",
        ...sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
}
