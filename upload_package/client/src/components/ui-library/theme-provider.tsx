import React, { createContext, useState, useContext, useEffect } from "react";

interface ThemeColors {
  primary: string;
  secondary: string;
  success: string;
  warning: string;
  error: string;
  [key: string]: string;
}

interface ThemeOptions {
  colors?: Partial<ThemeColors>;
  borderRadius?: string | number;
  fontFamily?: string;
}

interface ThemeContextValue {
  theme: ThemeOptions;
  updateTheme: (newTheme: Partial<ThemeOptions>) => void;
}

const defaultTheme: ThemeOptions = {
  colors: {
    primary: "#3B82F6",
    secondary: "#8B5CF6",
    success: "#10B981",
    warning: "#F59E0B",
    error: "#EF4444",
  },
  borderRadius: "0.375rem",
  fontFamily: "'Inter', sans-serif",
};

const ThemeContext = createContext<ThemeContextValue>({
  theme: defaultTheme,
  updateTheme: () => {},
});

export const UIThemeProvider: React.FC<{
  theme?: ThemeOptions;
  children: React.ReactNode;
}> = ({ theme = defaultTheme, children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeOptions>(theme);

  const updateTheme = (newTheme: Partial<ThemeOptions>) => {
    setCurrentTheme((prevTheme) => ({
      ...prevTheme,
      ...newTheme,
      colors: {
        ...prevTheme.colors,
        ...newTheme.colors,
      },
    }));
  };

  useEffect(() => {
    // Apply theme to CSS variables
    if (currentTheme.colors) {
      const root = document.documentElement;
      
      Object.entries(currentTheme.colors).forEach(([key, value]) => {
        if (key === "primary") {
          root.style.setProperty("--primary", value);
        } else if (key === "secondary") {
          root.style.setProperty("--secondary", value);
        } else if (key === "success") {
          root.style.setProperty("--success", value);
        } else if (key === "warning") {
          root.style.setProperty("--warning", value);
        } else if (key === "error") {
          root.style.setProperty("--error", value);
        }
      });
    }
    
    if (currentTheme.borderRadius) {
      document.documentElement.style.setProperty(
        "--radius", 
        typeof currentTheme.borderRadius === 'number' 
          ? `${currentTheme.borderRadius}rem` 
          : currentTheme.borderRadius
      );
    }
    
    if (currentTheme.fontFamily) {
      document.body.style.fontFamily = currentTheme.fontFamily;
    }
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useUITheme = () => useContext(ThemeContext);
