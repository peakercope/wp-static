/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_WP_API: string;
  readonly HOME_PAGE_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
