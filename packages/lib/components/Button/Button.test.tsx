import React from "react";
import { render, fireEvent } from "../../test-utils";
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

  it("Should render fullWidth", () => {
    const { container } = render(<Button fullWidth>Sample Text</Button>);

    expect(container).toBeInTheDocument();
  });

  it("Should trigger onClick", () => {
    const mockFunction = jest.fn();

    const { getByText } = render(<Button onClick={mockFunction}>Sample Text</Button>);

    const button = getByText("Sample Text");

    fireEvent.click(button);

    expect(mockFunction).toHaveBeenCalled();
  });

  it("Should not trigger onClick when disabled", () => {
    const mockFunction = jest.fn();

    const { getByText } = render(
      <Button onClick={mockFunction} disabled>
        Sample Text
      </Button>,
    );

    const button = getByText("Sample Text");

    fireEvent.click(button);

    expect(mockFunction).not.toHaveBeenCalled();
  });
});
