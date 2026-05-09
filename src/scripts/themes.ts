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
  blue: {
    page: '#124259',
    font: '#dcd4cb',
    muted: '#949494',
    accent: '#dcd4cb',
    border: '#5D7781',
  },
  brown: {
    page: '#2B2827',
    font: '#d9b478',
    muted: '#76654F',
    accent: '#d9b478',
    border: '#5B4E3D',
  },
  velvet: {
    page: '#2a1f3e',
    font: '#e2bfa4',
    muted: '#6D5A62',
    accent: '#e2bfa4',
    border: '#332945',
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
