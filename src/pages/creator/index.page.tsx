import { FC } from 'react';
import CardDisplay from '@cardEditor/cardStyles/components/CardDisplay';
import { SEO } from '@layout';
import CardDownloader from '@cardEditor/cardOptions/components/atoms/CardDownloader';
import { siteDescription } from 'src/constants';
import ImportExport from '@cardEditor/cardOptions/components/atoms/ImportExport';
import { CardWrapper, Wrapper } from './styles';

const Creator: FC = () => (
  <>
    <SEO title="Creator" description={siteDescription} />
    <Wrapper>
      <CardWrapper>
        <CardDisplay />
        <ImportExport />
        <CardDownloader />
      </CardWrapper>
    </Wrapper>
  </>
);

export default Creator;
