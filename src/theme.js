import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#4CAF50", // verde musgo do Coronel
    },
    secondary: {
      main: "#FFB300", // amarelo queimado
    },
    background: {
      default: "#F9F9F9",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
});

// Deixa fontes fluidas conforme tamanho da tela
theme = responsiveFontSizes(theme);

export default theme;
