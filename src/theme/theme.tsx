import type { ThemeOptions } from "@mui/material/styles";

export const colors = {
  white: "#ffffff",
  black: "#000000",
  highlight: "#36727D",
  borderColor: "#80808066",
};

declare module "@mui/material/Typography/Typography" {
  interface TypographyPropsVariantOverrides {
    logo: true;
    lead: true;
    footer: true;
  }
}

declare module "@mui/material/Button/Button" {
  interface ButtonPropsVariantOverrides {
    social: true;
  }
}

export const baseTheme = (mode: "light" | "dark"): ThemeOptions => ({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1360,
      xl: 1600,
    },
  },
  spacing: 10,
  palette: {
    mode,
    primary: {
      main: mode === "dark" ? colors.white : colors.black,
    },
    background: {
      default: mode === "dark" ? colors.black : colors.white,
    },
    text: {
      primary: mode === "dark" ? colors.white : colors.black,
      secondary: mode === "dark" ? colors.white : colors.black,
    },
  },
  typography: {
    fontFamily: 'Inter, "Helvetica Neue", Helvetica, Arial, sans-serif',
    allVariants: {
      letterSpacing: "-0.05em",
      lineHeight: "120%",
    },
    h1: {
      fontSize: "clamp(50px, 5.5vw, 104px)",
      fontWeight: 700,
      color: mode === "dark" ? colors.white : colors.black,
    },
    h2: {
      fontSize: "clamp(25px, 4.5vw, 72px)",
      fontWeight: 700,
      color: mode === "dark" ? colors.white : colors.black,
    },
    body1: {
      fontSize: 24,
      fontWeight: 400,
    },
    body2: {
      fontSize: 20,
      color: mode === "dark" ? colors.highlight : colors.highlight,
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "social" },
          style: {
            textTransform: "none",
            fontSize: 20,
            padding: 0,
          },
        },
      ],
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: "logo" },
          style: {
            letterSpacing: "-0.05em",
            fontSize: 24,
            fontWeight: 700,
            "& span": {
              color: colors.highlight,
            },
          },
        },
        {
          props: { variant: "lead" },
          style: {
            letterSpacing: "-0.05em",
            fontSize: 24,
            fontWeight: 600,
          },
        },
        {
          props: { variant: "footer" },
          style: {
            letterSpacing: "-0.05em",
            fontSize: 16,
          },
        },
      ],
      styleOverrides: {
        h1: {
          "& span": {
            color: colors.highlight,
          },
        },
      },
    },
  },
});
