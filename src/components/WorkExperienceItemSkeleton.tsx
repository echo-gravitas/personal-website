import { Grid } from '@mui/material';
import { Section } from './Section';
import { Skeleton } from '@mui/material';

export const WorkExperienceItemSkeleton: React.FC = () => {
  return (
    <Section padding={{ top: 2, bottom: 2 }} borderBottom>
      <Grid container columns={12} spacing={1}>
        <Grid size={{ sm: 12 }}>
          <Skeleton
            variant={'rectangular'}
            animation={'wave'}
            height={28.8}
            width={'100%'}
          />
        </Grid>
        <Grid size={{ xs: 6 }}>
          <Skeleton
            variant={'rectangular'}
            animation={'wave'}
            height={24}
            width={'100%'}
          />
        </Grid>
        <Grid size={{ xs: 6 }}>
          <Skeleton
            variant={'rectangular'}
            animation={'wave'}
            height={24}
            width={'100%'}
          />
        </Grid>{' '}
      </Grid>
    </Section>
  );
};
