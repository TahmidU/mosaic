import { cleanup, fireEvent, render, screen } from "utils/test-config";

import React from "react";
import Socials from "./Socials";
import { removeAllSpaces } from "utils/TestUtils";

afterEach(cleanup);

describe("Socials", () => {
  test("Filter socials", () => {
    const expectedLinks = [
      "https://www.instagram.com/124",
      "https://twitter.com/124",
      "http://localhost/124",
      "https://www.facebook.com/124",
    ];

    const validLinks = [
      {
        variant: "facebook",
        href: "124",
      },
      {
        variant: "instagram",
        href: "124",
      },
      {
        variant: "external",
        href: "124",
      },
      {
        variant: "twitter",
        href: "124",
      },
    ];

    const invalidLinks = [
      {
        variant: "blah",
        href: "124",
      },
    ];

    const links: any = [...validLinks, ...invalidLinks];

    render(<Socials links={links} />);

    const linksResult = screen.queryAllByRole("link");
    expect(linksResult.length).toBe(4);

    linksResult.forEach((_link) => {
      const _linkStr = (_link as any).href;
      expect(expectedLinks.includes(_linkStr)).toBeTruthy();
    });
  });
});
