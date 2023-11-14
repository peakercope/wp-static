import type { PostType } from '@/entities/post/model';
import { JSDOM } from 'jsdom';

export const render = (content: PostType['content']) => {
  console.log(content);

  const dom = new JSDOM(content);
  const parsedHTML = Array.from(dom.window.document.body.children);

  console.log(parsedHTML);

  return content;
};
