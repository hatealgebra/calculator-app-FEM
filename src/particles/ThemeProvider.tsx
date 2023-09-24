import React, { ReactNode, useState } from "react";
import defaultTheme, { lightTheme, neonTheme } from "./theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyle";

interface ICustomThemeContext {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const CustomThemeContext = React.createContext<ICustomThemeContext>({theme: '', setTheme: () => 'default' });

const ThemeProviderWrapper = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<string>("default");

    const contextValue: ICustomThemeContext = {
        theme:theme,
        setTheme:setTheme
    }


  const assignTheme =
    theme === "neon"
      ? neonTheme
      : theme === "light"
      ? lightTheme
      : defaultTheme;


  return (
    <CustomThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={assignTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </CustomThemeContext.Provider>
  );
};

export default ThemeProviderWrapper;
