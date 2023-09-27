import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import NavbarComponent from "./Components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <NavbarComponent />
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
