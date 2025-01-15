"use client";
import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { system } from "@chakra-ui/react/preset";
import { ThemeProvider } from "next-themes";

const emotionCache = createCache({ key: "chakra", prepend: true });

export default function Providers(props: { children: React.ReactNode }) {
  return (
    <CacheProvider value={emotionCache}>
      <ChakraProvider value={system}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          {props.children}
        </ThemeProvider>
      </ChakraProvider>
    </CacheProvider>
  );
}
