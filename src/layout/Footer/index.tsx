import { GitHub as GitHubIcon } from '@mui/icons-material';
import { IconButton, Paper } from '@mui/material';
import Routes from '@routes';
import { FC } from 'react';

const Footer: FC = () => (
  <Paper
    component="footer"
    sx={{
      p: [8, undefined, 1],
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: [2, undefined, 0],
      flexWrap: 'wrap',
      borderRadius: 0,
      flexDirection: ['column', undefined, 'row'],
    }}
  >
    <IconButton color="inherit" target="_blank" href={Routes.GitHub.Home}>
      <GitHubIcon />
    </IconButton>
  </Paper>
);

export default Footer;
