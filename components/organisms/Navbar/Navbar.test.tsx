import { cleanup, render } from "../../../resources/utils/test-config";

import Navbar from "./Navbar";
import React from "react";

afterEach(cleanup);

test("Navigation Options", () => {
  const { getByText } = render(<Navbar />);

  expect(getByText("Movies")).toBeDefined();
  expect(getByText("TV Shows")).toBeDefined();
  expect(getByText("People")).toBeDefined();
});
