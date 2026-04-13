import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter"; // Se estiver no Next 15
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme/theme";
import Navbar from "@/components/Navbar";
import { Cabin } from 'next/font/google';
import Footer from "@/components/Footer";
import type { Metadata } from "next";

// Configurando a fonte
const cabin = Cabin({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Escolha os pesos que vai usar
  variable: '--font-cabin', // Criamos uma variável CSS
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Florida Medical Facility Cleaning | FMFC",
  description: "Professional medical facility cleaning services in Florida. Specializing in terminal cleaning, MRI rooms, and surgical centers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cabin.variable}>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            {/* O CssBaseline remove as margens padrão do navegador e aplica o fundo do tema */}
            <CssBaseline />
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
