import React from "react";
import { Typography, TypographyProps } from "@mui/material";

interface PreTitleProps extends TypographyProps {
  children: React.ReactNode;
  customColor?: string;
}

export default function PreTitle({ children, customColor, sx, ...props }: PreTitleProps) {
  return (
    <Typography
      variant="overline"
      sx={{
        color: customColor || "secondary.main",
        fontWeight: "bold",
        letterSpacing: 2,
        textTransform: "uppercase",
        display: "block",
        ...sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
}
