import React, { FC } from "react";
import Button from ".";

export default { title: "Button" };

export const Default: FC = () => <Button>Hello Button</Button>;

export const FullWidth: FC = () => <Button fullWidth>Hello Button</Button>;
