import { flavors, type AccentName, type FlavorName } from '@catppuccin/palette';

const themeFlavors = ['frappe', 'latte'] as const satisfies FlavorName[];
const themeAccents = [
  'mauve',
  'red',
  'green',
  'blue',
] as const satisfies AccentName[];

type ThemeFlavor = (typeof themeFlavors)[number];
type ThemeAccent = (typeof themeAccents)[number];

const createThemeTokens = (
  flavorName: ThemeFlavor,
  accentName: ThemeAccent,
) => {
  const colors = flavors[flavorName].colors;

  return {
    page: colors.base.hex,
    font: colors.text.hex,
    muted: colors.subtext0.hex,
    accent: colors[accentName].hex,
    border: colors.surface1.hex,
  };
};

export const themeTokens = Object.fromEntries(
  themeAccents.flatMap((accentName) =>
    themeFlavors.map((flavorName) => [
      `${flavorName}-${accentName}`,
      createThemeTokens(flavorName, accentName),
    ]),
  ),
) as Record<
  `${ThemeFlavor}-${ThemeAccent}`,
  ReturnType<typeof createThemeTokens>
>;

export type Theme = keyof typeof themeTokens;

export const themes = Object.keys(themeTokens) as Theme[];

export const defaultTheme: Theme = 'frappe-mauve';

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
