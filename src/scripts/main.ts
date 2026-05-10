import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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

document.querySelector('[data-theme-toggle]')?.addEventListener('click', () => {
  const currentTheme = getTheme();
  const currentIndex = themes.indexOf(currentTheme);
  const nextTheme = themes[(currentIndex + 1) % themes.length];

  setTheme(nextTheme);
});

const revealText = () => {
  const textElements = gsap.utils.toArray<HTMLElement>('[data-reveal]');
  const contentElements = textElements.filter(
    (element) => !element.closest('footer'),
  );
  const footerElements = textElements.filter((element) =>
    element.closest('footer'),
  );

  if (textElements.length === 0) {
    return;
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
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

  createRevealBatch(contentElements, 'top 85%');
  createRevealBatch(footerElements, 'top 100%');

  window.addEventListener('load', () => ScrollTrigger.refresh(), {
    once: true,
  });
};

revealText();
