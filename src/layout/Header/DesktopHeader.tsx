import { Forward as ForwardIcon } from '@mui/icons-material';
import { Button, Link } from '@mui/material';
import Routes from '@routes';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { NavItems } from './styles';

const DesktopHeader: FC = () => {
  const { asPath } = useRouter();

  if (asPath === Routes.Creator) return null;

  return (
    <>
      <NavItems>
        <NextLink href={Routes.Creator} passHref>
          <Button component={Link} color="inherit" endIcon={<ForwardIcon />}>
            Get started now
          </Button>
        </NextLink>
      </NavItems>
    </>
  );
};

export default DesktopHeader;
