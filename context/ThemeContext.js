import React, { createContext, useContext } from 'react';

const ThemeContext = createContext();

export function useThemeContext() {
  return useContext(ThemeContext);
}

export default ThemeContext;
