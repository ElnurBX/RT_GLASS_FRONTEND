import { Montserrat, Roboto, Inter } from "next/font/google";

// Montserrat — əsas font kimi
export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Roboto — başqa səhifə və ya komponent üçün
export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

// Inter — alternativ üçün (istəyə bağlı)
export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});
