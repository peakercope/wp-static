import type { Post as WpPost } from '@wordpress/core-data';

export interface Post extends WpPost {
  _embedded?: {
    'wp:featuredmedia': { source_url: string }[];
  };
}
