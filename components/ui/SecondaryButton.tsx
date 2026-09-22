import React from "react";
import { Button, ButtonProps } from "@mui/material";

interface SecondaryButtonProps extends ButtonProps {
  children: React.ReactNode;
  customColor?: string;
}

export default function SecondaryButton({ children, customColor, sx, ...props }: SecondaryButtonProps) {
  const color = customColor || "primary.main";
  const hoverColor = customColor || "primary.dark";

  return (
    <Button
      variant="outlined"
      size="large"
      sx={{
        px: 4,
        py: 1.8,
        textTransform: "none",
        fontWeight: "bold",
        color: color,
        borderColor: color,
        borderRadius: "50px",
        "&:hover": {
          borderColor: hoverColor,
          bgcolor: "rgba(51, 190, 202, 0.05)",
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
}
