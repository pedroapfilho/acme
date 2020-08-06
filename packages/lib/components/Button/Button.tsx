import React, { FC, memo } from "react";
import { StyledButton } from "./styles";
import { ButtonProps } from "./types";

const Button: FC<ButtonProps> = ({ children, fullWidth = false, disabled = false, ...props }) => {
  return (
    <StyledButton fullWidth={fullWidth} disabled={disabled} {...props}>
      {children}
    </StyledButton>
  );
};

export default memo(Button);
