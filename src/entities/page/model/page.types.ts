import type { Page as WPPage } from '@wordpress/core-data';

export interface Page extends WPPage {
  _embedded?: {
    'wp:featuredmedia': { source_url: string }[];
  };
}
