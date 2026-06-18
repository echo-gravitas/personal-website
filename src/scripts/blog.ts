const datePrefixPattern = /^\d{4}-\d{2}-\d{2}-/;
const draftPrefix = 'draft-';
const removeDraftPrefix = (id: string) =>
  id.startsWith(draftPrefix) ? id.slice(draftPrefix.length) : id;

export const isDraftPost = (post: { id: string }) =>
  post.id.startsWith(draftPrefix);

export const getPostSlug = (id: string) =>
  removeDraftPrefix(id).replace(datePrefixPattern, '');

export const getPostUrl = (post: { id: string; data: { topic: string } }) =>
  `/blog/${post.data.topic}/${getPostSlug(post.id)}`;

export const getPostDatePrefix = (date: Date) => {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const day = String(date.getUTCDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

export const assertPostFilenameMatchesPubDate = (post: {
  id: string;
  data: { pubDate: Date };
}) => {
  const expectedPrefix = `${getPostDatePrefix(post.data.pubDate)}-`;

  const idWithoutDraftPrefix = removeDraftPrefix(post.id);

  if (!idWithoutDraftPrefix.startsWith(expectedPrefix)) {
    throw new Error(
      `Blog post "${post.id}" must start with its publication date: ${expectedPrefix}`,
    );
  }
};
