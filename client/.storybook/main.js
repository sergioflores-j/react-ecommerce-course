module.exports = {
  stories: ['../src/components/**/stories.tsx'],
  addons: ['@storybook/addon-essentials'],
  webpackFinal: config => {
    // ? Load files based on src
    config.resolve.modules.push(`${process.cwd()}/src`);

    return config;
  },
};
