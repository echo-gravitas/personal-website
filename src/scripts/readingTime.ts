const CHARACTERS_PER_MINUTE = 1500;

const stripMarkdownSyntax = (content: string) =>
  content
    .replace(/^---[\s\S]*?---/, '')
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/!\[[^\]]*]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/[>#*_~|[\]()-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

export const getReadingTimeMinutes = (content = '') => {
  const characterCount = stripMarkdownSyntax(content).length;

  return Math.max(1, Math.ceil(characterCount / CHARACTERS_PER_MINUTE));
};

export const getReadingTimeLabel = (content = '') => {
  const minutes = getReadingTimeMinutes(content);

  return `ca. ${minutes} Min. Lesezeit`;
};
