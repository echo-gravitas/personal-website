const datePrefixPattern = /^\d{4}-\d{2}-\d{2}-/;

export const getPostSlug = (id: string) => id.replace(datePrefixPattern, '');

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

  if (!post.id.startsWith(expectedPrefix)) {
    throw new Error(
      `Blog post "${post.id}" must start with its publication date: ${expectedPrefix}`,
    );
  }
};
