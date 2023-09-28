import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import NavbarComponent from "./Components/Navbar";
import { Inter } from "next/font/google";
import { ThemeProvider as NextThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <NextUIProvider>
        <NextThemeProvider attribute="class" defaultTheme="light">
          <NavbarComponent />
          <Component {...pageProps} />
        </NextThemeProvider>
      </NextUIProvider>
    </main>
  );
}
