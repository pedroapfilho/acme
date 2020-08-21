import React, { ReactElement } from "react";

// import theme from "./theme";

import { render, RenderOptions, RenderResult } from "@testing-library/react";

const Providers = ({ children }) => {
  return <>{children}</>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "queries">): RenderResult =>
  render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react";

export { customRender as render };
