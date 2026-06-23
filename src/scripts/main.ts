import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  applyFont,
  defaultFont,
  fonts,
  isFont,
  type Font,
} from './fonts';
import {
  applyTheme,
  defaultTheme,
  isTheme,
  themes,
  type Theme,
} from './themes';

gsap.registerPlugin(ScrollTrigger);

const getTheme = (): Theme => {
  const theme = document.documentElement.dataset.theme;

  return isTheme(theme) ? theme : defaultTheme;
};

const setTheme = (theme: Theme) => {
  applyTheme(theme);

  try {
    localStorage.setItem('theme', theme);
  } catch {}
};

const setNextTheme = () => {
  const currentTheme = getTheme();
  const currentIndex = themes.indexOf(currentTheme);
  const nextTheme = themes[(currentIndex + 1) % themes.length];

  setTheme(nextTheme);
};

const getFont = (): Font => {
  const font = document.documentElement.dataset.font;

  return isFont(font) ? font : defaultFont;
};

const setFont = (font: Font) => {
  applyFont(font);

  try {
    localStorage.setItem('font', font);
  } catch {}
};

const setNextFont = () => {
  const currentFont = getFont();
  const currentIndex = fonts.indexOf(currentFont);
  const nextFont = fonts[(currentIndex + 1) % fonts.length];

  setFont(nextFont);
};

const isEditableElement = (element: EventTarget | null) =>
  element instanceof HTMLElement &&
  (element.isContentEditable ||
    ['INPUT', 'TEXTAREA', 'SELECT'].includes(element.tagName));

document.querySelector('[data-theme-toggle]')?.addEventListener('click', () => {
  setNextTheme();
});

document.querySelector('[data-font-toggle]')?.addEventListener('click', () => {
  setNextFont();
});

document.addEventListener('keydown', (event) => {
  if (isEditableElement(event.target)) {
    return;
  }

  if (event.key.toLowerCase() === 't') {
    setNextTheme();
  }

  if (event.key.toLowerCase() === 'f') {
    setNextFont();
  }
});

const scrollToHashTarget = () => {
  const hash = window.location.hash.slice(1);

  if (!hash) {
    return;
  }

  const target = document.getElementById(decodeURIComponent(hash));

  if (!target) {
    return;
  }

  const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ? 'auto'
    : 'smooth';

  target.scrollIntoView({ block: 'start', behavior });
};

window.addEventListener('load', scrollToHashTarget, { once: true });
window.addEventListener('hashchange', scrollToHashTarget);

const revealText = () => {
  const revealSelectors = [
    '[data-reveal]',
    '[data-observation-reveal]',
    '[data-observation-meta] > *',
    '[data-observation-tags] > *',
    '.observation-content > *',
    '.observation-content li',
    '[data-observation-sources] > *',
    '[data-observation-sources] li',
  ].join(',');
  const textElements = gsap.utils
    .toArray<HTMLElement>(revealSelectors)
    .filter((element, index, elements) => elements.indexOf(element) === index)
    .filter((element) => {
      const listItem = element.closest<HTMLElement>(
        '[data-observation-list] [data-observation-reveal]',
      );

      return !listItem || listItem === element;
    });
  const contentElements = textElements.filter(
    (element) => !element.closest('footer'),
  );
  const footerElements = textElements.filter((element) =>
    element.closest('footer'),
  );

  if (textElements.length === 0) {
    return;
  }

  if (
    window.location.hash ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    gsap.set(textElements, { autoAlpha: 1, y: 0 });
    return;
  }

  gsap.set(textElements, { autoAlpha: 0, y: 18 });

  const createRevealBatch = (elements: HTMLElement[], start: string) => {
    if (elements.length === 0) {
      return;
    }

    ScrollTrigger.batch(elements, {
      start,
      once: true,
      onEnter: (batch) => {
        gsap.to(batch, {
          autoAlpha: 1,
          y: 0,
          duration: 0.75,
          ease: 'power4.out',
          stagger: 0.08,
          clearProps: 'opacity,transform,visibility',
        });
      },
    });
  };

  createRevealBatch(contentElements, 'top 90%');
  createRevealBatch(footerElements, 'top 100%');

  window.addEventListener('load', () => ScrollTrigger.refresh(), {
    once: true,
  });
};

revealText();
