import { ChakraProvider } from "@chakra-ui/react";
import { miscotaSystem } from "./theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider value={miscotaSystem}>{children}</ChakraProvider>;
}
