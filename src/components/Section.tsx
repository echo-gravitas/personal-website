import Box from "@mui/material/Box";
import type { SectionProps } from "../types/types";
import { colors } from "../theme/theme";

const Section: React.FC<SectionProps> = ({
  children,
  padding = { top: 0, bottom: 0 },
  borderBottom = false,
}) => {
  return (
    <Box
      sx={{
        paddingTop: padding.top,
        paddingBottom: padding.bottom,
        borderBottom: borderBottom ? `1px solid ${colors.gray}` : "none",
      }}
    >
      {children}
    </Box>
  );
};

export default Section;
