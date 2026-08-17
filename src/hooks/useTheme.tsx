import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme');
    return (saved as Theme) || 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    // Troca de tema INSTANTÂNEA (técnica do manoelja): desativa as transições
    // CSS no instante da troca, para as cores (transition: all 0.2-0.3s) não
    // animarem e causarem a "leve demora" ao alternar o tema.
    root.classList.add('no-theme-transition');
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    // Força o layout para aplicar o novo tema no mesmo frame
    // e reabilita as transições logo em seguida
    root.getBoundingClientRect();
    root.classList.remove('no-theme-transition');
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
