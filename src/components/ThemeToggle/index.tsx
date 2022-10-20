import { AnalyticsEvent, useAnalytics } from '@features/analytics';
import { useSettings } from '@features/settings';
import {
  Brightness4 as MoonIcon,
  Brightness7 as SunIcon,
} from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { FC, useCallback } from 'react';

const ThemeToggle: FC = () => {
  const { themeMode, setThemeMode } = useSettings();
  const { trackEvent } = useAnalytics();

  const handleClick = useCallback(() => {
    setThemeMode(prev => {
      const newMode = prev === 'light' ? 'dark' : 'light';
      trackEvent(AnalyticsEvent.ThemeSwitch, {
        theme: newMode,
      });

      return newMode;
    });
  }, [setThemeMode, trackEvent]);

  return (
    <IconButton
      aria-label="switch theme"
      color="inherit"
      onClick={handleClick}
      sx={{ ml: 'auto' }}
    >
      {themeMode === 'light' ? <MoonIcon /> : <SunIcon />}
    </IconButton>
  );
};

export default ThemeToggle;
