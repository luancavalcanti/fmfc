import React from "react";
import { Typography, TypographyProps } from "@mui/material";

interface SubtitleProps extends TypographyProps {
  children: React.ReactNode;
}

export default function Subtitle({ children, sx, ...props }: SubtitleProps) {
  return (
    <Typography
      variant="h6"
      sx={{
        color: "text.secondary",
        fontWeight: 400,
        lineHeight: 1.6,
        maxWidth: "90%",
        ...sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
}
