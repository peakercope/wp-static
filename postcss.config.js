// eslint-disable-next-line import/no-extraneous-dependencies
import postcssPresetEnv from 'postcss-preset-env';
// eslint-disable-next-line import/no-extraneous-dependencies
import Autoprefixer from 'autoprefixer';
// eslint-disable-next-line import/no-extraneous-dependencies
import csso from 'postcss-csso';

export default {
  plugins: [
    postcssPresetEnv({
      stage: 3,
      features: {
        'nesting-rules': true,
        'custom-media-queries': true,
        'media-query-ranges': true,
      },
    }),
    Autoprefixer(),
    csso(),
  ],
};
