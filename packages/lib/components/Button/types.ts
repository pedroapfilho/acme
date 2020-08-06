import { HTMLProps } from "react";

interface ButtonProps extends Omit<HTMLProps<HTMLButtonElement>, "size" | "as"> {
  fullWidth?: boolean;
}

export type { ButtonProps };
