import React, { ReactElement } from "react";

import { ThemeProvider } from "styled-components";
import theme, { GlobalStyle } from "./theme";

import { render, RenderOptions, RenderResult } from "@testing-library/react";

const Providers = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			{children}
		</ThemeProvider>
	);
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "queries">): RenderResult =>
	render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react";

export { customRender as render };
