import { useEffect, useState, useMemo } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = ({ children }) => {
  // Check system preference or localStorage for initial state
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' || 
      (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  // Toggle function
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Persist theme choice and update body class for global CSS styling
  useEffect(() => {
    const theme = isDarkMode ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    
    // Optional: Add/remove class to body for easy CSS targeting
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Memoize the value to prevent unnecessary re-renders
  const value = useMemo(() => ({
    isDarkMode,
    toggleTheme,
    theme: isDarkMode ? 'dark' : 'light'
  }), [isDarkMode]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};