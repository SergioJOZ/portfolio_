
import { Montserrat } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "../components/MTCustom"

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Bienvenido a mi Portfolio",
};



export default function RootLayout({ children }) {
  return (
    
    <html lang="en" className="scroll-smooth">
      <ThemeProvider>
      <body className={montserrat.className}>{children}</body>
      </ThemeProvider>
    </html>
    
  );
}
