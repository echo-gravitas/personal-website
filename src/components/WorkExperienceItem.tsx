import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import { Section } from "./Section";
import type { Career } from "../types/types";

// NOTE: Content while loading

export const WorkExperienceItem: React.FC<Career> = ({
  position,
  employer,
  from,
  to,
}) => {
  return (
    <Section padding={{ top: 2, bottom: 2 }} borderBottom>
      <Grid container justifyContent={"space-between"} columns={12} spacing={1}>
        <Grid size={{ sm: 12 }}>
          <Typography>
            <strong>{position}</strong>
          </Typography>
        </Grid>
        <Grid>
          <Typography variant={"body2"}>{employer}</Typography>
        </Grid>
        <Grid>
          <Typography variant="body2">
            {from}&ndash;{to === "Present" ? "Present" : to}
          </Typography>
        </Grid>
      </Grid>
    </Section>
  );
};
