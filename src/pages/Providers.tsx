import { CardDebugProvider } from '@cardEditor/cardDebug';
import { CardLogicProvider } from '@cardEditor/cardLogic';
import { CardOptionsProvider } from '@cardEditor/cardOptions';
import { CardStylesProvider } from '@cardEditor/cardStyles';
import { ThemeProvider } from '@emotion/react';
import { AnalyticsProvider } from '@features/analytics';
import { useSettings } from '@features/settings';
import { FC } from 'react';

const Providers: FC = ({ children }) => {
  const { theme } = useSettings();

  return (
    <ThemeProvider theme={theme}>
      <CardOptionsProvider>
        <CardDebugProvider>
          <CardLogicProvider>
            <CardStylesProvider>
              <AnalyticsProvider>
                {children}
              </AnalyticsProvider>
            </CardStylesProvider>
          </CardLogicProvider>
        </CardDebugProvider>
      </CardOptionsProvider>
    </ThemeProvider>
  );
}

export default Providers;
