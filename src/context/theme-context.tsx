import React, { createContext } from "react";

const themes = {
  dark: {
    backgroundColor: "hsl(209, 23%, 22%)",
    color: "white",
  },
  light: {
    backgroundColor: "white",
    color: "black",
  },
};

const initialState = {
  dark: false,
  theme: themes.light,
  toggle: () => {},
};
const ThemeContext = createContext(initialState);

function ThemeProvider({ children }: any) {
  const [dark, setDark] = React.useState(false);

  // On mount, read the preferred theme from the persistence
  React.useEffect(() => {
    const isDark = localStorage.getItem("dark") === "true";
    setDark(isDark);
  }, [dark]);

  // To toggle between dark and light modes
  const toggle = () => {
    localStorage.setItem("dark", JSON.stringify(!dark));
    setDark(!dark);
  };

  const theme = dark ? themes.dark : themes.light;

  return <ThemeContext.Provider value={{ theme, dark, toggle }}>{children}</ThemeContext.Provider>;
}

export { ThemeProvider, ThemeContext };
