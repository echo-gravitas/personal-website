export const themeTokens = {
  dark: {
    '--theme-page': '#060606',
    '--theme-font': '#f8f8f5',
    '--theme-muted': '#a1a1a1',
    '--theme-accent': '#f8f8f5',
    '--theme-border': '#232323',
  },
  light: {
    '--theme-page': '#f8f8f5',
    '--theme-font': '#060606',
    '--theme-muted': '#737373',
    '--theme-accent': '#060606',
    '--theme-border': '#d9d9d9',
  },
  blue: {
    '--theme-page': '#124259',
    '--theme-font': '#dcd4cb',
    '--theme-muted': '#737373',
    '--theme-accent': '#dcd4cb',
    '--theme-border': '#dcd4cb',
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

  Object.entries(themeTokens[theme]).forEach(([property, value]) => {
    element.style.setProperty(property, value);
  });
};
