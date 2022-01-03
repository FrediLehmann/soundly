const path = require('path');

module.exports = {
  webpackFinal: async config => {
    config.resolve.alias['$lib/supabase'] = path.resolve(
      __dirname,
      '../__mocks__/supabase.js'
    );
    config.resolve.alias['$lib'] = path.resolve(__dirname, '../src/lib');
    config.resolve.alias['$app/navigation'] = path.resolve(
      __dirname,
      '../__mocks__/fileMock.js'
    );

    const svelteLoader = config.module.rules.find(
      r => r.loader && r.loader.includes('svelte-loader')
    );
    svelteLoader.options.preprocess = require('svelte-preprocess')();
    return config;
  },
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-svelte-csf',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions'
  ],
  framework: '@storybook/svelte',
  svelteOptions: {
    preprocess: import('../svelte.config.js').preprocess
  },
  staticDirs: ['../static']
};
