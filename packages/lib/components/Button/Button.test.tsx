import React from "react";
import { render } from "../../test-utils";
import Button from ".";

describe("Button", () => {
  it("Should match snapshots", () => {
    const { container } = render(<Button>Sample Text</Button>);

    expect(container).toMatchSnapshot();
  });

  it("Should render with no errors", () => {
    const { container } = render(<Button>Sample Text</Button>);

    expect(container).toBeInTheDocument();
  });
});
