import { cleanup, render, screen } from "utils/test-config";

import ExternalLink from ".";
import React from "react";

afterEach(cleanup);

describe("ExternalLink", () => {
  test("Is rendering?", () => {
    const expectedText = "Test";

    render(<ExternalLink>{expectedText}</ExternalLink>);

    expect(screen.getByText(expectedText, { selector: "a" })).toBeDefined();
  });
});
