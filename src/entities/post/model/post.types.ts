import type { Post as WPPost } from '@wordpress/core-data';

export interface Post extends WPPost {
  _embedded?: {
    'wp:featuredmedia': { source_url: string }[];
  };
}
