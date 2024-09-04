import { defineStyle, defineStyleConfig, extendTheme } from '@chakra-ui/react';

// Define custom styles for Heading
const title = defineStyle({
  color: 'heading',
  fontFamily: 'mulish',
  fontWeight: '900',
  textAlign: 'center',
});
// Create a style configuration for Heading
export const headingTheme = defineStyleConfig({
    variants: { title },
});
