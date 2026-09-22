import React from "react";
import { Typography, TypographyProps } from "@mui/material";

interface SectionTitleProps extends TypographyProps {
  children: React.ReactNode;
  customColor?: string;
}

export default function SectionTitle({ children, customColor, sx, ...props }: SectionTitleProps) {
  return (
    <Typography
      variant="h3"
      component="h2"
      sx={{
        fontWeight: 800,
        color: customColor || "primary.main",
        fontSize: { xs: "2.3rem", md: "3.3rem" },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
}
