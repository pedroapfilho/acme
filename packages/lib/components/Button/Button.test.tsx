import React from "react";
import { render } from "@testing-library/react";
import Button from ".";

test("Renders Button", () => {
	const { container } = render(<Button>Something</Button>);

	expect(container).toBeInTheDocument();
});
