import { CardDebugProvider } from '@cardEditor/cardDebug';
import { ThemeProvider } from '@emotion/react';
import { AnalyticsProvider } from '@features/analytics';
import { useSettings } from '@features/settings';
import { FC } from 'react';

const Providers: FC = ({ children }) => {
  const { theme } = useSettings();

  return (
    <ThemeProvider theme={theme}>
      <CardDebugProvider>
        <AnalyticsProvider>{children}</AnalyticsProvider>
      </CardDebugProvider>
    </ThemeProvider>
  );
};

export default Providers;
