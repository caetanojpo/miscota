"use client";
import { ChakraProvider } from "@chakra-ui/react";
import createCache from "@emotion/cache";
import { ThemeProvider } from "next-themes";
import { miscotaSystem } from "./theme";
import { CacheProvider } from "@emotion/react";

const cache = createCache({ key: "css", prepend: true });

export default function Provider(props: { children: React.ReactNode }) {
  return (
    <CacheProvider value={cache}>
      <ChakraProvider value={miscotaSystem}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          {props.children}
        </ThemeProvider>
      </ChakraProvider>
    </CacheProvider>
  );
}
