import postcssPresetEnv  from 'postcss-preset-env';
import Autoprefixer from 'autoprefixer';
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
