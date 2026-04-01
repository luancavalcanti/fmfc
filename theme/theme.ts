"use client";
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#33beca', // Cyan blue
    },
    secondary: {
      main: '#f6af85', // Orange
    },
    text: {
      primary: '#fff', // White
      secondary: '#898989ff', // Light gray
    },
    background: {
      default: '#f4f7f9', // Gray
    },
  },
  typography: {
    fontFamily: 'Cabin, arial, sans-serif',
  },
});

export default theme;