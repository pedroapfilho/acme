import React from "react";
import styled, { css } from "styled-components";
import { ButtonProps } from "./types";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const StyledButton = styled(({ size, fullWidth, color, ...props }) => <button {...props} />)<
	ButtonProps
>`
  cursor: pointer;
  transition: ${(props) => props.theme.transition};

  &:focus {
    outline: none;
  };

  ${(props) =>
		props.size === "medium" &&
		css`
			padding: ${props.theme.space * 2}px;
		`}

  ${(props) =>
		props.size === "small" &&
		css`
			padding: ${props.theme.space}px;
		`}

  ${(props) =>
		props.fullWidth &&
		css`
			width: 100%;
		`}
`;

export { StyledButton };
