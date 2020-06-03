const { resolve } = require("path");

module.exports = {
  stories: ["../components/**/stories.tsx"],
  addons: [
    {
      name: "@storybook/preset-typescript",
      options: {
        forkTsCheckerWebpackPluginOptions: {
          colors: false,
        },
        include: [resolve("../components")],
      },
    },
  ],
};
