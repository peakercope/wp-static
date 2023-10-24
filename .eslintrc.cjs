module.exports = {
  root: true,
  extends: [
    'plugin:astro/recommended',
    'plugin:astro/jsx-a11y-recommended',
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:svelte/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/strict',
  ],
  parserOptions: {
    project: './tsconfig.json',
    extraFileExtensions: ['.astro', '.svelte'],
  },
  settings: {
    'import/resolver': {
      typescript: true,
    },
  },
  rules: {
    'import/prefer-default-export': 'off',
  },
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
    {
      files: ['**/*.astro/*.js', '*.astro/*.js'],
      parserOptions: {
        sourceType: 'module',
      },
    },
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        'import/no-mutable-exports': 'off',
      },
    },
  ],
};
