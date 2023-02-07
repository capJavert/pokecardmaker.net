import AccordionForm from '@components/AccordionForm';
import Tooltip from '@components/inputs/Tooltip';
import { Box } from '@mui/system';
import { FC } from 'react';
import NewFeatureHelpText from '../../atoms/NewFeatureHelpText';
import TextFormattingTooltip from '../../atoms/TextFormattingTooltip';
import BadgeIconSelector from '../CardInfoForm/fields/BadgeIconSelector';
import DescriptionInput from './fields/DescriptionInput';
import HitpointsInput from './fields/HitpointsInput';
import NameInput from './fields/NameInput';
import PrevolveImgSrcFileUploader from './fields/PrevolveImgSrcFileUploader';
import PrevolveNameInput from './fields/PrevolveNameInput';
import SubnameInput from './fields/SubnameInput';
import TypeImgAmountSelector from './fields/TypeImgAmountSelector';
import TypeImgSelector from './fields/TypeImgSelector';

const BasicsForm: FC = () => (
  <AccordionForm slug="basicsForm" header="Basics">
    <Box mt={-2} mb={-1}>
      <NewFeatureHelpText>
        Text formatting has changed. Click the icon for more information about{' '}
        <b>bold text</b> and more{' '}
        <Tooltip title="Text Formatting" withPopup>
          <TextFormattingTooltip />
        </Tooltip>
      </NewFeatureHelpText>
    </Box>
    <NameInput />
    <SubnameInput />
    <HitpointsInput />
    <DescriptionInput />
    <PrevolveNameInput />
    <PrevolveImgSrcFileUploader />
    <TypeImgSelector />
    <TypeImgAmountSelector />
    <BadgeIconSelector />
  </AccordionForm>
);

export default BasicsForm;
