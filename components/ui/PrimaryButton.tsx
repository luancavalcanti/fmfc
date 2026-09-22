import React from "react";
import { Button, ButtonProps } from "@mui/material";

interface PrimaryButtonProps extends ButtonProps {
  children: React.ReactNode;
  customBgColor?: string;
}

export default function PrimaryButton({ children, customBgColor, sx, ...props }: PrimaryButtonProps) {
  return (
    <Button
      variant="contained"
      size="large"
      sx={{
        px: 5,
        py: 1.8,
        textTransform: "none",
        fontWeight: "bold",
        color: "white",
        bgcolor: customBgColor || "secondary.main",
        borderRadius: "50px",
        boxShadow: customBgColor ? "none" : "0px 10px 20px rgba(246, 175, 133, 0.3)",
        "&:hover": { 
          bgcolor: customBgColor || "secondary.dark", 
          transform: "translateY(-2px)" 
        },
        transition: "all 0.3s ease",
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
}
