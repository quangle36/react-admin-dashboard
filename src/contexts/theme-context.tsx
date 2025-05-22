import React from 'react';

const ThemeContext = React.createContext({});

export const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemeContext.Provider
      value={{}}
    >
      {children}
    </ThemeContext.Provider>
  )
};

export const useThemeContext = () => React.useContext(ThemeContext);