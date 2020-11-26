module.exports = {
  stories: ["../**/*.stories.tsx"],
  addons: ["@storybook/addon-actions", "@storybook/addon-links"],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    }
  }
};