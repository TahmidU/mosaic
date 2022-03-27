import { cleanup, fireEvent, render } from "@testing-library/react";

import Button from ".";
import React from "react";

afterEach(cleanup);

it("Button", () => {
  const { queryByLabelText, getByLabelText, getByText } = render(<Button />);

  expect(getByText("Special Button", { selector: "button" })).toBeDefined();
});
