import { CacheProvider, EmotionCache, ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { AppProps as NextAppProps } from 'next/app';
import { FC, useEffect } from 'react';
import { createEmotionCache } from '@css';
import { Footer, Header } from '@layout';
import CookieConsent from '@components/CookieConsent';
import GoatCounter from '@features/analytics/components/GoatCounter';
import { GoogleTagManagerScript } from '@features/analytics/components/GTM';
import { useRouter } from 'next/router';
import { useSettingsStore } from '@features/settings';
import { AnalyticsProvider } from '@features/analytics';
import { getTheme } from '@utils/theme';
import { Background, MainContainer } from './styles';

interface AppProps extends NextAppProps {
  emotionCache: EmotionCache;
}

const clientSideCache = createEmotionCache();

const App: FC<AppProps> = ({
  emotionCache = clientSideCache,
  Component,
  pageProps,
}) => {
  const router = useRouter();
  const theme = useSettingsStore(store => store.theme);

  useEffect(() => {
    const handleRouteChange = () => {
      window.goatcounter?.count();
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={getTheme(theme)}>
        <AnalyticsProvider>
          <GoogleTagManagerScript />
          <GoatCounter />
          <CssBaseline />
          <Background>
            <CookieConsent />
            <Header />
            <MainContainer as="main">
              <Component {...pageProps} />
            </MainContainer>
            <Footer />
          </Background>
        </AnalyticsProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
