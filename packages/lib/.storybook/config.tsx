import React from "react";

import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme, { GlobalStyle } from "../theme";

addDecorator((storyFn) => (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		{storyFn()}
	</ThemeProvider>
));
