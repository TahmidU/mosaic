import { cleanup, fireEvent, render, screen } from "utils/test-config";

import SearchInput from "./SearchInput";
import React from "react";

import * as useRoutes from "hooks/useRoutes";

afterEach(cleanup);

describe("SearchInput", () => {
  const expectedSearchStr = "searchMockString";
  const goToSearchPageMock: any = jest.fn((search?: string, type?: any) => {
    expect(search).toEqual(expectedSearchStr);
  });
  jest.spyOn(useRoutes, "default").mockReturnValue({
    ...jest.requireActual("hooks/useRoutes"),
    goToSearchPage: goToSearchPageMock,
  });

  test("On search, click icon", async () => {
    const searchIconTestId = "SearchInput-SearchIcon";

    render(<SearchInput text={expectedSearchStr} setText={() => {}} />);
    await new Promise((r) => setTimeout(r, 1000));

    const searchIcon = screen.getByTestId(searchIconTestId);
    fireEvent.click(searchIcon);
  });

  test("On search, on enter key", async () => {
    const searchInputTestId = "SearchInput";
    const enterKey = "Enter",
      enterCharCode = 13;

    render(<SearchInput text={expectedSearchStr} setText={() => {}} />);
    await new Promise((r) => setTimeout(r, 1000));

    const inputElement = screen.getByTestId(searchInputTestId);
    fireEvent.keyDown(inputElement, {
      key: enterKey,
      code: enterKey,
      charCode: enterCharCode,
    });
  });
});

describe("MobileSearchInput", () => {});
