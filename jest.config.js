module.exports = {
	setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
	verbose: true,
	coverageThreshold: {
		global: {
			branches: 90,
			functions: 90,
			lines: 90,
			statements: 90,
		},
	},
};
