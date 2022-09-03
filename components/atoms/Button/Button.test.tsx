import { cleanup, render } from "utils/test-config";

import Button from ".";
import React from "react";

afterEach(cleanup);

describe("Button", () => {
  test("Text on Button component", () => {
    const expectedText = "Special Button";

    const { getByText } = render(<Button>{expectedText}</Button>);

    expect(getByText(expectedText, { selector: "button" })).toBeDefined();
  });
});
