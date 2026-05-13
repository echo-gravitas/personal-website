export const themeTokens = {
  dark: {
    page: '#0b0d11',
    font: '#cfd2bf',
    muted: '#4f524f',
    accent: '#cfd2bf',
    border: '#4f524f',
  },
  light: {
    page: '#fdfeff',
    font: '#454340',
    muted: '#a1a1a1',
    accent: '#454340',
    border: '#dddddd',
  },
  darkgreenred: {
    page: '#262c2f',
    font: '#f0f9ff',
    muted: '#8b9298',
    accent: '#ed5050',
    border: '#595f63',
  },
  creamypinkblue: {
    page: '#fbf6e3',
    font: '#c62273',
    muted: '#dda2b1',
    accent: '#1676a4',
    border: '#f0c4c7',
  },
  anthracitebrown: {
    page: '#1f2123',
    font: '#e3e5e6',
    muted: '#818384',
    accent: '#a27020',
    border: '#505254',
  },
  bordeauxred: {
    page: '#230e1c',
    font: '#fff7f4',
    muted: '#928287',
    accent: '#f15052',
    border: '#5a4851',
  },
  darkgreenorange: {
    page: '#111107',
    font: '#e2e4ea',
    muted: '#787b78',
    accent: '#feb024',
    border: '#45463f',
  },
  creamyred: {
    page: '#fffefe',
    font: '#002340',
    muted: '#81919f',
    accent: '#ea1724',
    border: '#c1c7cf',
  },
  darkbluepink: {
    page: '#012645',
    font: '#fffbff',
    muted: '#8291a3',
    accent: '#e51880',
    border: '#445b74',
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
