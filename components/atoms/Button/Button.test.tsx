import { cleanup, render, screen } from "utils/test-config";

import Button from ".";
import React from "react";

afterEach(cleanup);

describe("Button", () => {
  test("Text on Button component", () => {
    const expectedText = "Special Button";

    render(<Button>{expectedText}</Button>);

    expect(
      screen.getByText(expectedText, { selector: "button" })
    ).toBeDefined();
  });
});
