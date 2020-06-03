import React from "react";
import { render } from "@testing-library/react";
import Button from ".";

test("adds 1 + 2 to equal 3", () => {
	const { container } = render(<Button>Something</Button>);

	expect(container).toBeInTheDocument();
});
