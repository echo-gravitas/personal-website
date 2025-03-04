import Box from "@mui/material/Box";
import type { SectionProps } from "../types/types";
import { colors } from "../theme/theme";

const Section: React.FC<SectionProps> = ({
  children,
  paddingTop = 0,
  paddingBottom = 0,
  borderBottom = false,
}) => {
  return (
    <Box
      sx={{
        paddingTop: paddingTop,
        paddingBottom: paddingBottom,
        borderBottom: borderBottom ? `1px solid ${colors.gray}` : "none",
      }}
    >
      {children}
    </Box>
  );
};

export default Section;
