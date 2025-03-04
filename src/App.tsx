import { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import WorkExperienceItem from "./components/WorkExperienceItem";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Section from "./components/Section";
import { baseTheme } from "./theme/theme";
import type { Profiles, Career } from "./types/types";
import ProfileLink from "./components/ProfileLink";

const App: React.FC = () => {
  const theme = createTheme(baseTheme);
  const APIendpoint = "https://api.seventrees.io/Ss6YapO6ICzXyJoF2F_sB";
  const [profiles, setProfiles] = useState<Profiles>({
    online_profiles: [],
  });
  const [career, setCareer] = useState<Career[]>([]);

  useEffect(() => {
    fetch(`${APIendpoint}/career`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const career = data.career;
        const allPositions = [
          ...career.current_positions,
          ...career.previous_positions,
        ];
        allPositions.sort((a, b) => b.from.localeCompare(a.from));
        setCareer(allPositions);
      })
      .catch((error) => console.error("An error occurred:", error));
  }, []);

  useEffect(() => {
    fetch(`${APIendpoint}/online_profiles`)
      .then((response) => {
        return response.json();
      })
      .then((data) => setProfiles(data))
      .catch((error) => console.error("An error occurred:", error));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth={"lg"}>
        <Section paddingTop={2} paddingBottom={2}>
          <Grid
            container
            spacing={2}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Grid>
              <Typography variant={"logo"}>
                <span>ralph</span>bolliger.
              </Typography>
            </Grid>
            <Grid>
              <IconButton color={"primary"}>
                <DarkModeOutlinedIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Section>
        <Section paddingBottom={5} paddingTop={5}>
          <Grid container spacing={2}>
            <Grid>
              <Typography variant={"h1"}>
                I’m a passionate product designer dedicated to creating{" "}
                <span>sustainable user experiences with purpose.</span>
              </Typography>
            </Grid>
          </Grid>
        </Section>
        <Section paddingBottom={5}>
          <Grid container spacing={2}>
            <Grid>
              <Typography>
                Hi, I'm Ralph&mdash;a passionate UI/UX product designer, design
                ethicist, software developer, cypherpunk, and ham radio operator
                based in Lucerne, Switzerland.
              </Typography>
            </Grid>
          </Grid>
        </Section>
        <Section paddingBottom={10}>
          <Grid container spacing={5}>
            {profiles.online_profiles.map((profile) => (
              <ProfileLink
                label={profile.label}
                url={profile.url}
                key={profile.url}
              />
            ))}
          </Grid>
        </Section>
        <Section paddingBottom={10}>
          <Grid container columns={{ sm: 12 }} spacing={2}>
            <Grid size={{ sm: 6 }}>
              <Typography variant={"h2"}>Work experience</Typography>
            </Grid>
            <Grid size={{ sm: 6 }}>
              {career.map((career) => (
                <WorkExperienceItem
                  position={career.position}
                  employer={career.employer}
                  from={career.from}
                  to={career.to}
                  key={career.employer}
                />
              ))}
            </Grid>
          </Grid>
        </Section>
      </Container>
    </ThemeProvider>
  );
};

export default App;
