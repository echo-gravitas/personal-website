import type { ThemeOptions } from "@mui/material/styles";

const catppuccinLatteColors = [
  "#dc8a78", // Rosewater
  "#dd7878", // Flamingo
  "#ea76cb", // Pink
  "#8839ef", // Mauve
  "#d20f39", // Red
  "#e64553", // Maroon
  "#fe640b", // Peach
  "#df8e1d", // Yellow
  "#40a02b", // Green
  "#179299", // Teal
  "#04a5e5", // Sky
  "#209fb5", // Sapphire
  "#1e66f5", // Blue
  "#7287fd", // Lavender
];

const randomHighlight =
  catppuccinLatteColors[
    Math.floor(Math.random() * catppuccinLatteColors.length)
  ];

export const colors = {
  white: "#ffffff",
  black: "#000000",
  highlight: randomHighlight,
  borderColor: "#80808066",
  secondatyText: "#808080",
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
      lineHeight: "120%",
    },
    h1: {
      fontSize: "clamp(64px, 5.5vw, 104px)",
      fontWeight: 700,
      letterSpacing: "-0.05em",
      color: mode === "dark" ? colors.white : colors.black,
    },
    h2: {
      fontSize: "clamp(56px, 4.5vw, 72px)",
      letterSpacing: "-0.05em",
      fontWeight: 600,
      color: mode === "dark" ? colors.white : colors.black,
    },
    body1: {
      fontSize: 24,
      fontWeight: 400,
    },
    body2: {
      fontSize: 20,
      color: mode === "dark" ? colors.secondatyText : colors.secondatyText,
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
            "&:hover": {
              color: randomHighlight,
              transition: "color 200ms",
            },
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
            fontSize: 24,
            fontWeight: 600,
          },
        },
        {
          props: { variant: "footer" },
          style: {
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
