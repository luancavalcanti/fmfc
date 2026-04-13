"use client";

import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Stack,
  Container,
  Box,
  useScrollTrigger,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// images
import logo from "@/assets/logo.webp";
import logo2 from "@/assets/logo2.webp";

export default function Navbar() {
  const pathname = usePathname();
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 50 });
  
  // Estados
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Toggle do menu mobile
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // O "Scroll Spy" Matemático
  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      const sections = ["home", "services", "about"];
      const scrollPosition = window.scrollY + 150; 

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Função de clique nos links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    // Fecha o menu mobile se estiver aberto
    if (mobileOpen) setMobileOpen(false);

    if (pathname !== "/") return;

    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  // Drawer (Gaveta) do Mobile
  const drawerContent = (
    <Box sx={{ width: 250, bgcolor: "background.paper", height: "100%" }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon color="primary" />
        </IconButton>
      </Box>
      <Divider />
      <List sx={{ pt: 2 }}>
        {["home", "services", "about"].map((item) => {
          const isActive = pathname === "/" && activeSection === item;
          
          return (
            <ListItemButton
              key={item}
              component={Link}
              href={`/#${item}`}
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, item)}
              sx={{
                py: 2,
                color: isActive ? "secondary.main" : "text.secondary",
                fontWeight: isActive ? "bold" : "normal",
                borderLeft: isActive ? "4px solid" : "4px solid transparent",
                borderColor: isActive ? "secondary.main" : "transparent",
                bgcolor: isActive ? "rgba(0, 85, 150, 0.05)" : "transparent",
              }}
            >
              <ListItemText 
                primary={item.charAt(0).toUpperCase() + item.slice(1)} 
                primaryTypographyProps={{ fontWeight: isActive ? 700 : 500 }}
              />
            </ListItemButton>
          );
        })}
      </List>
      <Box sx={{ p: 3, mt: 2 }}>
        <Button
          component={Link}
          href="/quote"
          variant="contained"
          fullWidth
          onClick={() => setMobileOpen(false)}
          sx={{
            bgcolor: "primary.main",
            color: "white",
            textTransform: "none",
            fontWeight: "bold",
            borderRadius: "50px",
            py: 1.5,
            "&:hover": { bgcolor: "primary.dark" },
          }}
        >
          Get a Quote
        </Button>
      </Box>
    </Box>
  );

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
        color: trigger ? "text.primary" : "white",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          
          {/* LOGO AREA (Desktop & Mobile) */}
          <Box
            component={Link}
            href="/"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, "home")}
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <Image
              src={trigger ? logo : logo2}
              alt="FMFC Logo"
              style={{ width: trigger ? 100 : 130, height: "auto", transition: "all 0.1s ease-in-out" }}
            />
          </Box>

          {/* ICONE HAMBÚRGUER (Apenas Mobile) */}
          <IconButton
            edge="end"
            onClick={handleDrawerToggle}
            sx={{
              display: { xs: "flex", md: "none" },
              color: trigger ? "primary.main" : "white",
            }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>

          {/* NAV LINKS (Apenas Desktop) */}
          <Stack direction="row" spacing={2} sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
            {["home", "services", "about"].map((item) => {
              const isActive = pathname === "/" && activeSection === item;

              return (
                <Button
                  key={item}
                  component={Link}
                  href={`/#${item}`}
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, item)}
                  color="inherit"
                  sx={{
                    textTransform: "none",
                    fontWeight: isActive ? 700 : 400,
                    color: trigger ? (isActive ? "secondary.main" : "text.secondary") : "white",
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 8,
                      left: "15%",
                      width: isActive ? "70%" : "0%",
                      height: "3px",
                      backgroundColor: "secondary.main",
                      transition: "width 0.3s ease",
                    },
                    "&:hover": { backgroundColor: "transparent", "&::after": { width: "70%" } },
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Button>
              );
            })}

            {/* GET A QUOTE (Desktop) */}
            <Button
              component={Link}
              href="/quote"
              variant="contained"
              sx={{
                bgcolor: "primary.main",
                color: "white",
                textTransform: "none",
                fontWeight: "bold",
                borderRadius: "50px",
                px: 3,
                "&:hover": { bgcolor: "primary.dark" },
              }}
            >
              Get a Quote
            </Button>
          </Stack>
        </Toolbar>
      </Container>

      {/* DRAWER (Menu Lateral Mobile) */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Melhora a performance em dispositivos móveis
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 250 },
        }}
      >
        {drawerContent}
      </Drawer>
    </AppBar>
  );
}