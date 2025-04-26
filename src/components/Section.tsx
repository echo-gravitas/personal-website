import { Box } from '@mui/material';
import type { SectionProps } from '../types';
import { colors } from '../theme/theme';

export const Section: React.FC<SectionProps> = ({
  children,
  padding = { top: 0, bottom: 0 },
  borderBottom = false,
  borderTop = false,
}) => {
  return (
    <Box
      sx={{
        paddingTop: padding.top,
        paddingBottom: padding.bottom,
        borderTop: borderTop ? `1px solid ${colors.borderColor}` : 'none',
        borderBottom: borderBottom ? `1px solid ${colors.borderColor}` : 'none',
      }}
    >
      {children}
    </Box>
  );
};
