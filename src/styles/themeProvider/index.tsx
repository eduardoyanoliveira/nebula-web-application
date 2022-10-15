import React, { createContext, ReactNode } from 'react';
import usePersistedState from '../../application/CommonHooks/usePersistedState';
import { DefaultTheme, ThemeProvider as StyledThemeProvider } from 'styled-components';
import { blueSkyBaseColor, nebulaBaseColor, darkColors, lightColors } from '../design/colors'
import { GetItemfromLocalStorage } from '../../application/useCases/Cache/get-item-from-local-storage';
import { SaveItemOnLocalStorage } from '../../application/useCases/Cache/save-item-on-local-storage';
import { typographies } from '../design/typographies';

export const ThemeContext =  createContext({
  isDarkTheme: false,
  isNebulaTheme: true,
  toggleTheme: () => {},
  toggleDark: () => {},
});

interface Props {
  children: ReactNode
}

const getItemFromCache = new GetItemfromLocalStorage<boolean>();
const saveItemFromCache = new SaveItemOnLocalStorage<boolean>();
const  ThemeProvider: React.FC<Props> = ({children}) => {

  const [isDark, setIsDark] = usePersistedState('is_dark', false, getItemFromCache, saveItemFromCache);
  const [nebulaTheme, setNebulaTheme] = usePersistedState('isNebulaTheme', true, getItemFromCache, saveItemFromCache);

  const toggleTheme = () => {
    setNebulaTheme(!nebulaTheme);
  };

  const toggleDark = () => {
    setIsDark(!isDark);
  };

  const themeColors =  nebulaTheme ? nebulaBaseColor : blueSkyBaseColor;
  const themeStyleColors = isDark ? darkColors : lightColors;
  
  const theme: DefaultTheme = {
    title: isDark ? 'dark' : 'light',
    colors: { ...themeColors, ...themeStyleColors},
    typographies: typographies
  };
  
  return (
    <ThemeContext.Provider
        value={{
          isDarkTheme: isDark,
          isNebulaTheme: nebulaTheme,
          toggleTheme,
          toggleDark
        }}
    >
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;