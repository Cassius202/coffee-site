import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

// 3. Create a custom hook for easy consumption
export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
