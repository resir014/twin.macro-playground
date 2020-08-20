const babelConfig = require('@storybook/core/dist/server/common/babel').default()

module.exports = {
  stories: ['../src/**/*.stories.js', '../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  babel: {
    ...babelConfig,
    presets: [...babelConfig.presets, require.resolve('@emotion/babel-preset-css-prop')]
  }
}
