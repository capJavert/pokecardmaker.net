import { Box } from '@mui/system';
import { FC } from 'react';
import ExportButton from './atoms/ExportButton';
import ImportButton from './atoms/ImportButton';

// TODO: Only show if user knows how to use it
const ImportExport: FC = () => (
  <Box display="flex" flexDirection={['column', undefined, 'row']} gap={1}>
    <ImportButton />
    <ExportButton />
  </Box>
);

export default ImportExport;
