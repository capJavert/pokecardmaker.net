import { PaletteMode, Theme } from '@mui/material';
import { getTheme } from '@utils/theme';
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useMemo,
  useState,
} from 'react';

interface SettingsContextInterface {
  theme: Theme;
  themeMode: PaletteMode;
  setThemeMode: Dispatch<SetStateAction<PaletteMode>>;
}

export const SettingsContext = createContext<SettingsContextInterface>({
  theme: getTheme('light'),
  themeMode: 'light',
  setThemeMode: () => null,
});

export const SettingsProvider: React.FC = ({ children }) => {
  const [themeMode, setThemeMode] = useState<PaletteMode>('light');

  const modeTheme = useMemo(() => getTheme(themeMode), [themeMode]);

  return (
    <SettingsContext.Provider
      value={{
        theme: modeTheme,
        themeMode,
        setThemeMode,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
