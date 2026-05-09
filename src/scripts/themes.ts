export const themeTokens = {
  dark: {
    page: '#060606',
    font: '#f8f8f5',
    muted: '#a1a1a1',
    accent: '#f8f8f5',
    border: '#232323',
  },
  light: {
    page: '#f8f8f5',
    font: '#060606',
    muted: '#737373',
    accent: '#060606',
    border: '#d9d9d9',
  },
  blueishgray: {
    page: '#33384A',
    font: '#7EC2E6',
    muted: '#4E6A82',
    accent: '#7EC2E6',
    border: '#3C4151',
  },
  brown: {
    page: '#2B2827',
    font: '#d9b478',
    muted: '#76654F',
    accent: '#d9b478',
    border: '#5B4E3D',
  },
  bluegold: {
    page: '#363E4E',
    font: '#e1b25c',
    muted: '#746753',
    accent: '#e1b25c',
    border: '#3F4555',
  },
  anthracit: {
    page: '#2B2B2C',
    font: '#fffef9',
    muted: '#797877',
    accent: '#fffef9',
    border: '#343435',
  },
  creamy: {
    page: '#D7DCD5',
    font: '#242527',
    muted: '#9A9E9A',
    accent: '#242527',
    border: '#D9DDD7',
  },
} as const;

export type Theme = keyof typeof themeTokens;

export const themes = Object.keys(themeTokens) as Theme[];

export const defaultTheme: Theme = 'dark';

export const isTheme = (theme: string | undefined | null): theme is Theme =>
  typeof theme === 'string' &&
  Object.prototype.hasOwnProperty.call(themeTokens, theme);

export const applyTheme = (
  theme: Theme,
  element = document.documentElement,
) => {
  element.dataset.theme = theme;

  Object.entries(themeTokens[theme]).forEach(([token, value]) => {
    element.style.setProperty(`--theme-${token}`, value);
  });
};
