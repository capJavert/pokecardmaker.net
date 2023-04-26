import { CacheProvider, EmotionCache, ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { AppProps as NextAppProps } from 'next/app';
import { FC, useEffect } from 'react';
import { createEmotionCache } from '@css';
import { Footer, Header } from '@layout';
import { useRouter } from 'next/router';
import { useSettingsStore } from '@features/settings';
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
        <CssBaseline />
        <Background>
          <Header />
          <MainContainer as="main">
            <Component {...pageProps} />
          </MainContainer>
          <Footer />
        </Background>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
