const datePrefixPattern = /^\d{4}-\d{2}-\d{2}-/;
const datePrefixCapturePattern = /^(\d{4})-(\d{2})-(\d{2})-/;
const draftPrefix = 'draft-';
const removeDraftPrefix = (id: string) =>
  id.startsWith(draftPrefix) ? id.slice(draftPrefix.length) : id;

export const isDraftPost = (post: { id: string }) =>
  post.id.startsWith(draftPrefix);

export const getPostSlug = (id: string) =>
  removeDraftPrefix(id).replace(datePrefixPattern, '');

export const getPostUrl = (post: { id: string; data: { topic: string } }) =>
  `/blog/${post.data.topic}/${getPostSlug(post.id)}`;

export const getPostPubDate = (post: { id: string }) => {
  const idWithoutDraftPrefix = removeDraftPrefix(post.id);
  const datePrefixMatch = idWithoutDraftPrefix.match(datePrefixCapturePattern);

  if (!datePrefixMatch) {
    throw new Error(
      `Blog post "${post.id}" must start with its publication date: YYYY-MM-DD-`,
    );
  }

  const [, year, month, day] = datePrefixMatch;
  const date = new Date(Date.UTC(Number(year), Number(month) - 1, Number(day)));

  if (
    date.getUTCFullYear() !== Number(year) ||
    date.getUTCMonth() !== Number(month) - 1 ||
    date.getUTCDate() !== Number(day)
  ) {
    throw new Error(`Blog post "${post.id}" has an invalid publication date.`);
  }

  return date;
};
