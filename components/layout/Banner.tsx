import { Box, Container, Typography } from "@mui/material";

interface BannerProps {
    title: string;
    subtitle: string;
    img: string;
}

export default function Banner({ title, subtitle, img }: BannerProps) {
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        py: { xs: 8, md: 10 },
        textAlign: "justify",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>
          {title}
        </Typography>
        <Typography variant="h6" sx={{ opacity: 0.9, maxWidth: "800px" }}>
          {subtitle}
        </Typography>
      </Container>
    </Box>
  );
}
