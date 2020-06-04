// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	extends: [
		"plugin:jest-dom/recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier/@typescript-eslint",
		"plugin:prettier/recommended",
		"plugin:react-hooks/recommended",
		"plugin:react/recommended",
	],
	parserOptions: {
		ecmaVersion: 2017,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
	env: {
		es6: true,
	},
	rules: {
		"prefer-const": [
			"error",
			{
				destructuring: "all",
			},
		],
		"react/prop-types": [0],
	},
	settings: {
		react: {
			version: "detect",
		},
		"import/resolver": {
			"eslint-import-resolver-lerna": {
				packages: path.resolve(__dirname, "src/packages"),
			},
		},
	},
};
