import React, { FC, memo } from "react";
import ButtonProps from "./types";

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default memo(Button);
