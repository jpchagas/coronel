import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#2563EB", // Medical Blue - trust & main actions
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#A78BFA", // Lavender Violet - calm & highlights
      contrastText: "#1F2937",
    },
    background: {
      default: "#F5F7FF", // Soft medical background
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1F2937",
      secondary: "#4B5563",
    },
    success: {
      main: "#22C55E",
    },
    warning: {
      main: "#F59E0B",
    },
    error: {
      main: "#EF4444",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    button: {
      textTransform: "none", // More human, less aggressive
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 10, // Friendly, modern healthcare look
  },
});

theme = responsiveFontSizes(theme);

export default theme;
