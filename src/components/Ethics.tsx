import { Grid, Typography } from "@mui/material";
import { Section } from "./Section";

export const Ethics: React.FC = () => {
  return (
    <Section padding={{ bottom: 10 }}>
      <Grid container columns={{ xs: 12 }} spacing={5}>
        <Grid size={{ sm: 12, md: 6 }}>
          <Typography variant={"h2"}>
            Ethical Design: A Responsibility, Not a Choice
          </Typography>
        </Grid>
        <Grid size={{ sm: 12, md: 6 }}>
          <Section padding={{ bottom: 5 }}>
            <Typography component={"p"} variant={"lead"}>
              As a designer, I am constantly challenged to strike a balance
              between the benefits of a product and the costs of using it, such
              as the user's time and attention. Design ethics is about engaging
              in moral behavior and making responsible decisions throughout the
              design process.
            </Typography>
          </Section>
          <Typography>
            Design ethics involves avoiding the use of dark patterns and not
            hiding relevant information. Ethical design opposes persuasive
            design and prioritizes usability and accessibility in digital
            products. It values respect, privacy, transparency, and focus.
            Ultimately, ethical design is centered around the needs of human
            users and supports sustainable practices.
          </Typography>
        </Grid>
      </Grid>
    </Section>
  );
};
