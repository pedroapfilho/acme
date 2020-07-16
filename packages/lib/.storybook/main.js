const { resolve } = require("path");

module.exports = {
	stories: ["../components/**/stories.tsx"],
	webpackFinal: async (config) => {
		config.module.rules.push({
			test: /\.(ts|tsx)$/,
			loader: require.resolve("babel-loader"),
			options: {
				presets: [["react-app", { flow: false, typescript: true }]],
			},
		});
		config.resolve.extensions.push(".ts", ".tsx");
		return config;
	},
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
