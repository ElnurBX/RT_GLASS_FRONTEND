"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "@styles/GlobalStyle";
import { theme } from "@styles/theme";
import Header from "@/components/Layouts/Header/Header";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <Header/>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
