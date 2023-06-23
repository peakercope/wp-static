/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_WP_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
