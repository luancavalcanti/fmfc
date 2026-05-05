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
  Typography,
} from "@mui/material";

// Ícones do Menu
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

// Ícones da HeadBar
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// images
import logo from "@/assets/logo4.png";
import logo2 from "@/assets/logo4.png";

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
    if (mobileOpen) setMobileOpen(false);
    if (pathname !== "/") return;

    e.preventDefault();
    if (id === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveSection("home");
    return;
  }
    const element = document.getElementById(id);
    if (element) {
      const collapsedNavHeight = 60;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - collapsedNavHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  // Drawer (Gaveta) do Mobile
  const drawerContent = (
    <Box sx={{ width: 250, bgcolor: "primary.main", height: "100%" }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon sx={{ color: "white" }} />
        </IconButton>
      </Box>
      <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />
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
                color: isActive ? "secondary.main" : "white",
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
            bgcolor: "secondary.main",
            color: "white",
            textTransform: "none",
            fontWeight: "bold",
            borderRadius: "50px",
            py: 1.5,
            "&:hover": { bgcolor: "secondary.dark" },
          }}
        >
          Get a Free Quote
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
        backgroundColor: trigger ? "rgba(255, 255, 255, 0.95)" : "#3d3d3dff",
        backdropFilter: trigger ? "blur(8px)" : "none",
        transition: "all 0.3s ease-in-out",
        borderBottom: trigger ? "1px solid" : "none",
        borderColor: "divider",
        color: trigger ? "text.primary" : "white",
      }}
    >
      {/* ======================================= */}
      {/* HEADBAR (Topo Azul) */}
      {/* ======================================= */}
      <Box
        sx={{
          bgcolor: "primary.main",
          color: "white",
          height: 30,
          // Esconde a barra em telas muito pequenas (mobile) e também quando o usuário rolar a tela
          display: trigger ? "none" : { xs: "none", md: "block" },
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <Container maxWidth="lg">
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            
            {/* Lado Esquerdo - Contato Rápido */}
            <Stack direction="row" spacing={2}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {/* <PhoneIcon fontSize="small" sx={{ color: "secondary.main" }} /> */}
                <Typography variant="body2" sx={{ fontWeight: 100, letterSpacing: 0.5 }}>
                  561-247-1183
                </Typography>
              </Box>
              <Divider orientation="vertical" flexItem sx={{ borderColor: "rgba(255, 255, 255, 0.5)" }} />
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {/* <EmailIcon fontSize="small" sx={{ color: "secondary.main" }} /> */}
                <Typography variant="body2" sx={{ fontWeight: 100, letterSpacing: 0.5 }}>
                  clean@floridamfc.com
                </Typography>
              </Box>
            </Stack>

            {/* Lado Direito - Redes Sociais */}
            <Stack direction="row" spacing={1}>
              <IconButton size="small" sx={{ color: "white", "&:hover": { color: "secondary.main" } }}>
                <LinkedInIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" sx={{ color: "white", "&:hover": { color: "secondary.main" } }}>
                <FacebookIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" sx={{ color: "white", "&:hover": { color: "secondary.main" } }}>
                <InstagramIcon fontSize="small" />
              </IconButton>
            </Stack>

          </Stack>
        </Container>
      </Box>

      {/* ======================================= */}
      {/* NAVBAR PRINCIPAL */}
      {/* ======================================= */}
      <Container maxWidth="lg">
        {/* Ajustei o padding Y (py) para a transição ficar suave quando a HeadBar desaparecer */}
        <Toolbar disableGutters sx={{ justifyContent: "space-between", height: trigger ? "60px" : "100px", transition: "all 0.3s ease" }}>
          
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
              style={{ width: trigger ? 100 : 150, height: "auto", transition: "all 0.1s ease-in-out" }}
            />
            <Divider orientation="vertical" flexItem sx={{ display:{ xs: "none", sm: "block" }, mx: 2, borderColor: trigger ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.5)" }} />
            <Typography variant="body2" sx={{display:{ xs: "none", sm: "block" }, color: trigger ? "text.secondary" : "white", fontWeight: "100", letterSpacing: 1 }}>
              Florida Medical Facility Cleaning
            </Typography>
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
                    fontSize: "1rem",
                    textTransform: "none",
                    fontWeight: isActive ? 700 : 500, // Deixei o texto base um pouquinho mais grosso (500)
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
              href="/#quote"
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, "quote")}
              variant="contained"
              sx={{
                bgcolor: "primary.main",
                color: "white",
                textTransform: "none",
                fontWeight: "bold",
                borderRadius: "50px",
                px: 4, // Aumentei um pouco a largura do botão
                py: 1, // Dei um pouco mais de altura
                ml: 2, // Margem esquerda extra para desgrudar do menu
                "&:hover": { bgcolor: "primary.dark" },
              }}
            >
              Get a Free Quote
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
          keepMounted: true, 
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