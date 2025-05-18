// components/ThemeWrapper.tsx
"use client";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "doc-bot/styles/theme";
import { useTheme } from "doc-bot/context/ThemeContext";

export const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  const { isDarkMode } = useTheme(); // ✅ useTheme is used inside ThemeProvider
  const theme = isDarkMode ? darkTheme : lightTheme;

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};