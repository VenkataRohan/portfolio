// app/providers.tsx
'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark", // Set the initial color mode to dark
  useSystemColorMode: false, // Disable system color mode
};

const colors = {
  dark: {
    background: "black",
    text: "#E2E8F0",
    // Add more custom colors as needed
  },
};
const theme = extendTheme({ config, colors });



export function Providers({ children }: { children: React.ReactNode }) {
  return (
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
  )
}