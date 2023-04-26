import ThemeToggle from '@components/ThemeToggle';
import { Hidden, Link, Toolbar, Typography } from '@mui/material';
import Routes from '@routes';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import DesktopHeader from './DesktopHeader';
import { DefaultAppBar, InvisibleHeading } from './styles';

const Header: FC = () => {
  const { pathname } = useRouter();

  return (
    <>
      {(pathname === Routes.Home || pathname === Routes.Creator) && (
        <InvisibleHeading>TCG card maker</InvisibleHeading>
      )}
      <DefaultAppBar position="relative" color="primary">
        <Toolbar>
          <NextLink href={Routes.Home} passHref>
            <Typography variant="h1" component={Link} color="white">
              TCG card maker
            </Typography>
          </NextLink>
          <ThemeToggle />
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
