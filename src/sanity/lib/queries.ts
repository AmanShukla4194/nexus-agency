export const POSTS_QUERY = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    publishedAt
  }
`;

export const HOME_POSTS_QUERY = `
  *[_type == "post"] | order(publishedAt desc)[0...6] {
    _id,
    title,
    slug,
    mainImage,
    publishedAt
  }
`;