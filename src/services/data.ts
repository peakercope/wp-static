import type { Post } from '@ts/post';

export const getPostsSlug = async ():Promise<Post[]> => {
  const data = await fetch(`${import.meta.env.PUBLIC_WP_API}/posts?_fields=slug,id,title`);

  return data.json();
};

export const getPosts = async ():Promise<Post[]> => {
  const res = await fetch(`${import.meta.env.PUBLIC_WP_API}/posts`);

  return res.json();
};

export const getPost = async (id: number, embed: boolean):Promise<Post> => {
  const res = await fetch(`${import.meta.env.PUBLIC_WP_API}/posts/${id}${embed && '?_embed'}`);

  return res.json();
};
