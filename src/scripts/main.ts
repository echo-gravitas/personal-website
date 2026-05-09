const themes = ['dark', 'light'] as const;
type Theme = (typeof themes)[number];

const getTheme = (): Theme => {
  const theme = document.documentElement.dataset.theme;

  return theme === 'light' || theme === 'dark' ? theme : 'dark';
};

const setTheme = (theme: Theme) => {
  document.documentElement.dataset.theme = theme;

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
