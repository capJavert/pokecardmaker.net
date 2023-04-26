import ControlledCheckbox from '@components/inputs/ControlledCheckbox';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FC, useState } from 'react';
import ExportButton from './atoms/ExportButton';
import ImportButton from './atoms/ImportButton';

const ImportExport: FC = () => {
  const [active, setActive] = useState<boolean>(true);

  return (
    <Box display="flex" flexDirection="column" gap={1}>
      <ControlledCheckbox
        label="Enable advanced import/export"
        slug="importExport"
        onChange={setActive}
        value={active}
      />
      {active && (
        <>
          <Typography variant="caption">
            EXPERIMENTAL: This allows you to import and export your card as a
            JSON-object to or from your clipboard.
            <br />
            You can also pass the URL to your JSON config as <b>?url</b> query
            param.
          </Typography>
          <Box
            display="flex"
            flexDirection={['column', undefined, 'row']}
            gap={1}
          >
            <ImportButton />
            <ExportButton />
          </Box>
        </>
      )}
    </Box>
  );
};

export default ImportExport;
