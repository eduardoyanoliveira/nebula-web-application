import React, { createContext, ReactNode } from 'react';
import usePersistedState from '../../application/CommonHooks/usePersistedState';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import darkTheme from '../themes/dark';
import lightTheme from '../themes/light';
import { GetItemfromLocalStorage } from '../../application/useCases/Cache/get-item-from-local-storage';
import { SaveItemOnLocalStorage } from '../../application/useCases/Cache/save-item-on-local-storage';

export const ThemeContext =  createContext({
  isDarkTheme: false,
  toggleDark: () => {},
});

interface Props {
  children: ReactNode
};

const getItemFromCache = new GetItemfromLocalStorage<boolean>();
const saveItemFromCache = new SaveItemOnLocalStorage<boolean>();
const  ThemeProvider: React.FC<Props> = ({children}) => {

  const [dark, setDark] = usePersistedState('is_dark', false, getItemFromCache, saveItemFromCache);

  const toggleDark = () => {
    setDark(!dark);
  };
  
  return (
    <ThemeContext.Provider
        value={{
          isDarkTheme: dark,
          toggleDark
        }}
    >
      <StyledThemeProvider theme={dark ? darkTheme : lightTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;