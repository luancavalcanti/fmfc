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
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Importante para saber se estamos em /quote

// images
import logo from "@/assets/logo.webp";
import logo2 from "@/assets/logo2.webp";

export default function Navbar() {
  const pathname = usePathname();
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 50 });
  
  // Estado da seção ativa (padrão: home)
  const [activeSection, setActiveSection] = useState("home");

  // O "Scroll Spy" Matemático (100% Seguro)
  useEffect(() => {
    // Se não estivermos na página principal, desativa o scroll spy
    if (pathname !== "/") return;

    const handleScroll = () => {
      const sections = ["home", "services", "about"];
      // Pegamos a posição do scroll + uma margem (altura do menu + um pouco extra)
      const scrollPosition = window.scrollY + 150; 

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          
          // Se o scroll estiver dentro da área do elemento
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Executa ao carregar para pegar a posição inicial

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Função para rolar a tela suavemente e compensar a altura do Navbar fixo
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    // Se estiver em outra página (ex: /quote), deixa o link funcionar normalmente (ir para /#services)
    if (pathname !== "/") return;

    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80; // Altura aproximada do navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      // Atualiza o estado visualmente na hora do clique
      setActiveSection(id);
    }
  };

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
        <Toolbar disableGutters>
          {/* LOGO AREA */}
          <Box
            component={Link}
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
              style={{ marginRight: "12px", width: trigger ? 100 : 150, height: "auto", transition: "all 0.1s ease-in-out" }}
            />
          </Box>

          {/* NAV LINKS */}
          <Stack direction="row" spacing={2} sx={{ display: { xs: "none", md: "flex" } }}>
            {["home", "services", "about"].map((item) => {
              // Se estamos em outra página, nada fica ativo com a barrinha. Se estamos na home, usa o activeSection.
              const isActive = pathname === "/" && activeSection === item;

              return (
                <Button
                  key={item}
                  component={Link}
                  href={`/#${item}`}
                  onClick={(e) => handleNavClick(e, item)}
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

            {/* GET A QUOTE (Página Separada) */}
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
    </AppBar>
  );
}