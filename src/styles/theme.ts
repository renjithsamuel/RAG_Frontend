import {
  ThemeOptions,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";

// Type extensions for custom palette
declare module "@mui/material/styles" {
  interface Palette {
    userMessage: Palette["primary"];
    botMessage: Palette["primary"];
    accentBlue: Palette["primary"];
    button: Palette["primary"];
  }
  interface PaletteOptions {
    userMessage?: PaletteOptions["primary"];
    botMessage?: PaletteOptions["primary"];
    accentBlue?: PaletteOptions["primary"];
    button?: PaletteOptions["primary"];
  }
}

const baseThemeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: "#0c2465", // Applied Materials primary blue
      light: "#1e3799",
      dark: "#06153d",
    },
    secondary: {
      main: "#4a69bd", // Applied Materials accent blue
      light: "#6c8bdb",
      dark: "#2c4a9e",
    },
    error: {
      main: "#D33D3D",
    },
    success: {
      main: "#00796B",
    },
    background: {
      default: "#f3f7f9",
      paper: "#ffffff",
    },
    text: {
      primary: "#525252",
      secondary: "#636e72",
    },
    // Custom palette additions
    userMessage: {
      main: "#ffffff",
      contrastText: "#6B6B6B",
    },
    botMessage: {
      main: "#f3f7f9",
      contrastText: "#2d3436",
    },
    accentBlue: {
      main: "#4a69bd",
      contrastText: "#ffffff",
    },
    button: {
      main: "#727D90",
      contrastText: "#ffffff",
    },
  },
  typography: {
    fontFamily: ["Open Sans", "Roboto", "sans-serif"].join(","),
    h1: { fontWeight: 700, fontSize: "2.5rem" },
    h2: { fontWeight: 700, fontSize: "2rem" },
    h3: { fontWeight: 600, fontSize: "1.75rem" },
    h4: { fontWeight: 600, fontSize: "1.5rem" },
    h5: { fontWeight: 600, fontSize: "1.25rem" },
    h6: { fontWeight: 600, fontSize: "1.125rem" },
    button: { fontWeight: 600 },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          border: "1px solid #e0e0e0",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        },
      },
    },
  },
  spacing: 8,
};

export const lightTheme = responsiveFontSizes(
  createTheme({
    ...baseThemeOptions,
    palette: {
      ...baseThemeOptions.palette,
      mode: "light",
    },
  }),
);

export const darkTheme = responsiveFontSizes(
  createTheme({
    ...baseThemeOptions,
    palette: {
      ...baseThemeOptions.palette,
      mode: "dark",
      background: {
        default: "#1a1a1a",
        paper: "#2d2d2d",
      },
      text: {
        primary: "#ffffff",
        secondary: "#e0e0e0",
      },
    },
  }),
);
