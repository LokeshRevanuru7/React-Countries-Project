import { createContext, useState } from "react";

export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  let [theme, setTheme] = useState("light");

  const handleTheme = () => {
    setTheme((theme) => (theme == "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
