export const fonts = ['space-grotesk', 'inter', 'monolisa-text'] as const;

export type Font = (typeof fonts)[number];

export const defaultFont: Font = 'space-grotesk';

export const isFont = (font: string | undefined | null): font is Font =>
  typeof font === 'string' && fonts.includes(font as Font);

export const applyFont = (
  font: Font,
  element = document.documentElement,
) => {
  element.dataset.font = font;
};
