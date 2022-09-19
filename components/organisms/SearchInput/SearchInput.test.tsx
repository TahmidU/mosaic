import { cleanup, fireEvent, render, screen } from "utils/test-config";

import SearchInput from "./index";
import React from "react";
import { RouterContext } from "next/dist/shared/lib/router-context";

import * as useMediaQuery from "react-responsive";
import * as useRoutes from "hooks/useRoutes";

afterEach(cleanup);

describe("SearchInput", () => {
  let useMediaQueryMock: any = null;
  let useRoutesMock: any = null;
  let useStateTextMock: any = null;
  let setTextMock: any = jest.fn();
  beforeAll(() => {
    const expectedSearchStr = "searchMockString";

    useMediaQueryMock = jest.spyOn(useMediaQuery, "useMediaQuery");
    useMediaQueryMock.mockReturnValue(false);

    useStateTextMock = jest
      .spyOn(React, "useState")
      .mockReturnValueOnce([expectedSearchStr, setTextMock]);

    const goToSearchPageMock: any = jest.fn((search?: string, type?: any) => {
      expect(search).toEqual(expectedSearchStr);
    });
    useRoutesMock = jest.spyOn(useRoutes, "default").mockReturnValue({
      ...jest.requireActual("hooks/useRoutes"),
      goToSearchPage: goToSearchPageMock,
    });
  });

  afterAll(() => {
    useMediaQueryMock.mockRestore();
    useStateTextMock.mockRestore();
    useRoutesMock.mockRestore();
  });

  test("On search, click icon", async () => {
    const searchIconTestId = "SearchInput-SearchIcon";

    render(<SearchInput />);
    await new Promise((r) => setTimeout(r, 1000));

    const searchIcon = screen.getByTestId(searchIconTestId);
    fireEvent.click(searchIcon);
  });

  test("On search, on enter key", async () => {
    const searchInputTestId = "SearchInput";
    const enterKey = "Enter",
      enterCharCode = 13;

    render(<SearchInput />);
    await new Promise((r) => setTimeout(r, 1000));

    const inputElement = screen.getByTestId(searchInputTestId);
    fireEvent.keyDown(inputElement, {
      key: enterKey,
      code: enterKey,
      charCode: enterCharCode,
    });
  });
});

describe("MobileSearchInput", () => {
  let useMediaQueryMock: any = null;
  beforeAll(() => {
    useMediaQueryMock = jest.spyOn(useMediaQuery, "useMediaQuery");
    useMediaQueryMock.mockReturnValue(true);
  });

  afterAll(() => {
    useMediaQueryMock.mockRestore();
  });

  test("Search menu open and close", async () => {
    const router: any = {
      route: "/search",
      pathname: "/search",
      query: { type: undefined },
      asPath: "/search",
      basePath: "/search",
    };

    render(
      <RouterContext.Provider value={router}>
        <SearchInput />
      </RouterContext.Provider>
    );

    const searchIconOpen = screen.getByTestId("MobileSearchInput-SearchIcon");

    fireEvent.click(searchIconOpen);
    await new Promise((r) => setTimeout(r, 1000));

    screen.getByTestId("FullScreenSearchMenu");

    const closeIcon = screen.getByTestId("FullScreenSearchMenu-CloseBtn");
    fireEvent.click(closeIcon);

    await new Promise((r) => setTimeout(r, 1000));

    expect(screen.getByTestId("FullScreenSearchMenu")).not.toBeVisible();
  });

  test("Search on icon click", () => {});

  test("Movie search", () => {});

  test("TV search", () => {});
});
