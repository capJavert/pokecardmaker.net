import { useSettings } from '@features/settings';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { Hidden, IconButton, Link, Toolbar, Typography } from '@mui/material';
import Routes from '@routes';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import DesktopHeader from './DesktopHeader';
import { DefaultAppBar, InvisibleHeading } from './styles';

const Header: FC = () => {
  const { pathname } = useRouter();
  const { themeMode, setThemeMode } = useSettings();

  return (
    <>
      {(pathname === Routes.Home || pathname === Routes.Creator) && (
        <InvisibleHeading>Pokécardmaker.net</InvisibleHeading>
      )}
      <DefaultAppBar position="relative" color="primary">
        <Toolbar>
          <NextLink href={Routes.Home} passHref>
            <Typography variant="h1" component={Link} color="white">
              Pokécardmaker.net
            </Typography>
          </NextLink>
          <IconButton aria-label="switch theme mode" color="inherit" onClick={() => setThemeMode(prev => prev === 'light' ? 'dark' : 'light')} sx={{ ml: 'auto' }}>
            {themeMode === 'light' ? <Brightness4 /> : <Brightness7 />}
          </IconButton>
          <Hidden smDown>
            <DesktopHeader />
          </Hidden>
        </Toolbar>
      </DefaultAppBar>
      {/* <Hidden mdUp>
      <MobileHeader />
    </Hidden> */}
    </>
  );
};

export default Header;
