import CssBaseline from "@mui/material/CssBaseline";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NeovimIcon from "./assets/nvim-icon.svg";
import packageJSON from "../package.json";
import type { Profiles, Career } from "./types/types";
import { Design } from "./components/Design";
import { Ethics } from "./components/Ethics";
import { ProfileLink } from "./components/ProfileLink";
import { ProfileLinkSkeleton } from "./components/ProfileLinkSkeleton";
import { Section } from "./components/Section";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { WorkExperienceItem } from "./components/WorkExperienceItem";
import { WorkExperienceItemSkeleton } from "./components/WorkExperienceItemSkeleton";
import { baseTheme } from "./theme/theme";
import { transformCareerData } from "./transformers/transformCareerData";
import { useFetch } from "./hooks/useFetch";
import { useState, useEffect } from "react";
import { Link, Typography, Grid, IconButton, Container } from "@mui/material";

// TODO: Create app icon

const App: React.FC = () => {
  const preferDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;
  const [darkMode, setDarkMode] = useState(preferDarkMode);
  const theme = createTheme(baseTheme(darkMode ? "dark" : "light"));
  const APIendpoint = process.env.REACT_APP_API_ENDPOINT;
  const userID = process.env.REACT_APP_USER_ID;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => setDarkMode(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const { data: career } = useFetch<Career[]>(
    `${APIendpoint}${userID}/career`,
    transformCareerData,
  );

  const { data: profiles } = useFetch<Profiles>(
    `${APIendpoint}${userID}/online_profiles`,
  );

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
            {!profiles
              ? Array.from({ length: 4 }).map(() => <ProfileLinkSkeleton />)
              : profiles.online_profiles.map((profile) => (
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
              {!career
                ? Array.from({ length: 5 }).map(() => (
                    <WorkExperienceItemSkeleton />
                  ))
                : career.map((career) => (
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
        <Design />
        <Ethics />
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
