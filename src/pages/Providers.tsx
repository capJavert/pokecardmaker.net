import { CardDebugProvider } from '@cardEditor/cardDebug';
import { CardStylesProvider } from '@cardEditor/cardStyles';
import { ThemeProvider } from '@emotion/react';
import { AnalyticsProvider } from '@features/analytics';
import { useSettings } from '@features/settings';
import { FC } from 'react';

const Providers: FC = ({ children }) => {
  const { theme } = useSettings();

  return (
    <ThemeProvider theme={theme}>
      <CardDebugProvider>
        <CardStylesProvider>
          <AnalyticsProvider>{children}</AnalyticsProvider>
        </CardStylesProvider>
      </CardDebugProvider>
    </ThemeProvider>
  );
};

export default Providers;
