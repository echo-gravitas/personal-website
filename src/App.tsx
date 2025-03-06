import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  Link,
  Typography,
  Grid2 as Grid,
  IconButton,
  Container,
} from "@mui/material";
import { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { WorkExperienceItem } from "./components/WorkExperienceItem";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { Section } from "./components/Section";
import { baseTheme } from "./theme/theme";
import type { Profiles, Career } from "./types/types";
import { ProfileLink } from "./components/ProfileLink";
import { useFetch } from "./hooks/useFetch";
import { transformCareerData } from "./transformers/transformCareerData";
import packageJSON from "../package.json";
import NeovimIcon from "./assets/nvim-icon.svg";

const App: React.FC = () => {
  const preferDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;
  const [darkMode, setDarkMode] = useState(preferDarkMode);
  const APIendpoint = "https://api.seventrees.io/Ss6YapO6ICzXyJoF2F_sB";

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => setDarkMode(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const theme = createTheme(baseTheme(darkMode ? "dark" : "light"));

  const { data: career } = useFetch<Career[]>(
    `${APIendpoint}/career`,
    transformCareerData,
  );

  const { data: profiles } = useFetch<Profiles>(
    `${APIendpoint}/online_profiles`,
  );

  // TODO: Profile & social content while loading
  // TODO: create propper font-sizes for h1, h2 and p

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth={"lg"}>
        <Section padding={{ top: 2, bottom: 2 }}>
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
              <IconButton
                onClick={() => setDarkMode(!darkMode)}
                color={"primary"}
              >
                {darkMode ? (
                  <LightModeOutlinedIcon />
                ) : (
                  <DarkModeOutlinedIcon />
                )}
              </IconButton>
            </Grid>
          </Grid>
        </Section>
        <Section padding={{ top: 5, bottom: 5 }}>
          <Grid container spacing={2}>
            <Grid>
              <Typography variant={"h1"}>
                I’m a passionate product designer dedicated to creating{" "}
                <span>sustainable user experiences with purpose.</span>
              </Typography>
            </Grid>
          </Grid>
        </Section>
        <Section padding={{ bottom: 5 }}>
          <Grid container spacing={2}>
            <Grid>
              <Typography>
                Hi, I'm Ralph&mdash;a passionate product designer UI/UX, design
                ethicist, software developer, cypherpunk, and ham radio operator
                based in Lucerne, Switzerland.
              </Typography>
            </Grid>
          </Grid>
        </Section>
        <Section padding={{ bottom: 10 }}>
          <Grid container spacing={5}>
            {profiles?.online_profiles.map((profile) => (
              <ProfileLink
                label={profile.label}
                url={profile.url}
                key={profile.url}
              />
            ))}
          </Grid>
        </Section>
        <Section padding={{ bottom: 10 }}>
          <Grid container columns={{ xs: 12 }} spacing={5}>
            <Grid size={{ sm: 12, md: 6 }}>
              <Typography variant={"h2"}>
                A Path Through Design &amp; Technology
              </Typography>
            </Grid>
            <Grid size={{ sm: 12, md: 6 }}>
              {career?.map((career) => (
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
                  Based on modern software architecture, I strive to break down
                  the wall between humans and the things they are searching for.
                  Using often unconventional methods, I bring simplicity to a
                  world full of complex information. My guiding principle is to
                  always put the user first, and design with their needs and
                  goals in mind.
                </Typography>
              </Section>
              <Typography>
                Good design is innovative and makes a product useful. Good
                design is aesthetic and makes a product understandable. Good
                design is honest, unobtrusive, and long-lasting. Good design is
                thorough down to the last detail, and environmentally friendly.
                Good design is inclusive, accessible and involves as little
                design as possible.
              </Typography>
            </Grid>
          </Grid>
        </Section>
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
                  between the benefits of a product and the costs of using it,
                  such as the user's time and attention. Design ethics is about
                  engaging in moral behavior and making responsible decisions
                  throughout the design process.
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
        <Section padding={{ bottom: 2, top: 2 }} borderTop>
          <Grid container spacing={2} justifyContent={"space-between"}>
            <Grid>
              <Typography variant={"footer"}>
                &copy; {new Date().getFullYear()} by Ralph Bolliger
              </Typography>
            </Grid>
            <Grid>
              <Typography variant={"footer"}>
                v{packageJSON.version} &mdash; Proudly coded in{" "}
                <Link href="https://neovim.io/" target={"_blank"}>
                  <img
                    src={NeovimIcon}
                    alt={"Neovim"}
                    title={"Neovim"}
                    width={17}
                    height={20}
                    style={{ verticalAlign: "text-bottom" }}
                  />
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Section>
      </Container>
    </ThemeProvider>
  );
};

export default App;
