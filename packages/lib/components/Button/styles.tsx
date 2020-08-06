import React from "react";
import styled, { css } from "styled-components";
import { ButtonProps } from "./types";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const StyledButton = styled(({ size, fullWidth, color, ...props }) => <button {...props} />)<
  ButtonProps
>`
  cursor: pointer;

  &:focus {
    outline: none;
  }

  padding: ${(props) => props.theme.space[3]}px;

  border: none;

  background-color: ${(props) => props.theme.colors.background};

  color: ${(props) => props.theme.colors.text};

  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `};
`;

export { StyledButton };
