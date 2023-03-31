import { createContext, useCallback, useMemo, useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../configs/globalStyle";
import { darkTheme, defaultTheme } from "../configs/theme";

interface ThemeContextProps {
  children: React.ReactNode | React.ReactNode[];
}

const ThemeContext = createContext({});

const ThemeContextProvider = ({ children }: ThemeContextProps) => {
  const [theme, setTheme] = useState(defaultTheme);
  const updateTheme = useCallback((): void => {
    setTheme(darkTheme);
  }, []);
  const values = useMemo(
    () => ({ updateTheme, mode: theme.palette.mode }),
    [updateTheme]
  );
  return (
    <ThemeContext.Provider value={values}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
