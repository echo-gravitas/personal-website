import { applyTheme, defaultTheme, isTheme, themes, type Theme } from './themes';

const getTheme = (): Theme => {
  const theme = document.documentElement.dataset.theme;

  return isTheme(theme) ? theme : defaultTheme;
};

const setTheme = (theme: Theme) => {
  applyTheme(theme);

  try {
    localStorage.setItem('theme', theme);
  } catch {
  }
};

document.querySelector('[data-theme-toggle]')?.addEventListener('click', () => {
  const currentTheme = getTheme();
  const currentIndex = themes.indexOf(currentTheme);
  const nextTheme = themes[(currentIndex + 1) % themes.length];

  setTheme(nextTheme);
});
