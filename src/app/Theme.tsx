"use client";

import { Mulish } from "next/font/google";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react"; // Import React for typing
import { buttonTheme } from "../styles/themes/buttomTheme"; // Import your custom button theme
import { headingTheme } from "../styles/themes/headingTheme";
const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "500","600", "700","800", "900"],
  variable: "--font-mulish",
});

const theme = extendTheme({
  fonts: {
    mulish: mulish.style.fontFamily,
    body: mulish.style.fontFamily,
  },
  colors: {
    heading: "rgba(102, 51, 51, 1)",
    subHeading: "rgba(12, 91, 92, 1)",
    navbarColor: "rgba(7, 59, 60, 1)",
    paragraph: "rgba(15, 95, 98, 1)",
    darkGreen: "rgba(6, 51, 52, 1)",
    inactive: "rgba(88, 88, 88, 1)",
    btnBg: "rgba(46, 133, 135, 1)",
    layoutGradient: "linear-gradient(180deg, #9ECACB 0%, #D2FFCE 100%)",
    lightGreen: "rgba(19, 114, 118, 0.1)",
    darkThinGreen: "rgba(158, 202, 203, 0.4)",
    mediumThinGreen: "rgba(186, 230, 205, 0.4)",
    lightThinGreen: "rgba(210, 255, 206, 0.4)",
    lightGray: "rgba(240, 240, 240, 1)",
    tableHighlight: "rgba(15, 95, 98, 0.08)",
    cardText:'rgba(27, 95, 95, 1)',
  },
  components: {
    Button: buttonTheme, // Add custom button theme here
    Heading: headingTheme,

  },
});

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
