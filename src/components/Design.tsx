import { Grid2 as Grid, Typography } from "@mui/material";
import { Section } from "./Section";

export const Design: React.FC = () => {
  return (
    <Section padding={{ bottom: 10 }}>
      <Grid container columns={{ xs: 12 }} spacing={5}>
        <Grid size={{ sm: 12, md: 6 }}>
          <Typography variant={"h2"}>
            Human-Centered Design: A Manifesto
          </Typography>
        </Grid>
        <Grid size={{ sm: 12, md: 6 }}>
          <Section padding={{ bottom: 5 }}>
            <Typography component={"p"} variant={"lead"}>
              Based on modern software architecture, I strive to break down the
              wall between humans and the things they are searching for. Using
              often unconventional methods, I bring simplicity to a world full
              of complex information. My guiding principle is to always put the
              user first, and design with their needs and goals in mind.
            </Typography>
          </Section>
          <Typography>
            Good design is innovative and makes a product useful. Good design is
            aesthetic and makes a product understandable. Good design is honest,
            unobtrusive, and long-lasting. Good design is thorough down to the
            last detail, and environmentally friendly. Good design is inclusive,
            accessible and involves as little design as possible.
          </Typography>
        </Grid>
      </Grid>
    </Section>
  );
};
