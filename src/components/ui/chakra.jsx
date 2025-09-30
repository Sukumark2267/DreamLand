// src/components/ui/chakra.jsx (or .tsx)
"use client";

import { ChakraProvider } from "@chakra-ui/react";

export default function Chakra({ children }) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
