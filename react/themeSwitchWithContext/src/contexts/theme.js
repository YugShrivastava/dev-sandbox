import { createContext, useContext } from "react";

const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

const ThemeProvider = ThemeContext.Provider

export {ThemeContext, ThemeProvider};

export default function useTheme(){
  return useContext(ThemeContext)
}