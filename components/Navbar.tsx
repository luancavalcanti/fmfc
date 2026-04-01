"use client";

import {
  AppBar,
  Toolbar,
  Button,
  Stack,
  Container,
  Box,
  useScrollTrigger,
} from "@mui/material";
import Image from "next/image";

//images
import logo from "@/assets/logo.webp";
import logo2 from "@/assets/logo2.webp";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });
  const pathname = usePathname();

  function isActive(path: string) {
    return pathname === path;
  }

  return (
    <AppBar
      position="fixed"
      elevation={trigger ? 4 : 0}
      color="inherit"
      sx={{
        backgroundColor: trigger ? "rgba(255, 255, 255, 0.95)" : "transparent",
        backdropFilter: trigger ? "blur(8px)" : "none",
        transition: "all 0.2s ease-in-out",
        py: trigger ? 0 : 1.5,
        borderBottom: trigger ? "1px solid" : "none",
        borderColor: "divider",
        color: trigger ? "secondary.main" : "white",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* LOGO AREA */}
          <Box
            component="a"
            href="/"
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              flexGrow: 1,
              textDecoration: "none",
            }}
          >
            <Image
              src={trigger ? logo : logo2}
              alt="FMFC Logo"
              style={{
                marginRight: "12px",
                width: trigger ? 100 : 150,
                height: "auto",
                transition: "all 0.1s ease-in-out",
              }}
            />
          </Box>

          {/* NAV LINKS */}
          <Stack
            direction="row"
            spacing={2}
            color={trigger ? "text.secondary" : "text.primary"}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {["home", "services", "about"].map((item) => {
              const path = `/${item === "home" ? "" : item}`;
              console.log(item)
              return (
                <Button
                  key={item}
                  component={Link}
                  href={path}
                  color="inherit"
                  sx={{
                    textTransform: "none",
                    fontWeight: isActive(path) ? 700 : 400,
                    color: "inherit",
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: "10%",
                      width: isActive(path) ? "80%" : "0%",
                      height: "2px",
                      backgroundColor: "secondary.main",
                      transition: "width 0.3s ease",
                    },
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Button>
              );
            })}
            <Button
              component={Link}
              href="/quote"
              variant="contained"
              sx={{
                bgcolor: "primary.main",
                color: "white",
                textTransform: "none",
                borderRadius: "8px",
                px: 3,
              }}
            >
              Get a Quote
            </Button>
          </Stack>

          {/* MOBILE LOGO (Simplificado para o exemplo) */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              color: "primary.main",
            }}
          >
            <Image
              src={logo}
              alt="FMFC Logo"
              style={{ marginRight: "12px", width: 100, height: "auto" }}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
