import { ReactNode } from "react";
import Header from "@/containers/Layouts/Header";
import { montserrat, poppins } from "@/styles/fonts";
import { metadata } from "./metadata";
import "@/styles/globals.css";

export { metadata };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
