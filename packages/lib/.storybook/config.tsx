import React from "react";

import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import GlobalStyle from "../GlobalStyle";

addDecorator((storyFn) => (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		{storyFn()}
	</ThemeProvider>
));
