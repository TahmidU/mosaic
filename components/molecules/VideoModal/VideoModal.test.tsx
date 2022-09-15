import { cleanup, fireEvent, render, screen } from "utils/test-config";

import React from "react";
import VideoModal from "./VideoModal";
import getTheme from "resources/themes";

afterEach(cleanup);

describe("VideoModal", () => {
  let main: any = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    main = document.createElement("main");
    const portalContainer = document.createElement("div");
    portalContainer.id = "modalPortal";
    document.body.appendChild(portalContainer);
  });

  const lightTheme = getTheme("light");
  const fakeVideos = {
    id: 0,
    results: [
      {
        iso_639_1: "iso_639_1",
        iso_3166_1: "iso_3166_1",
        name: "name",
        key: "key",
        site: "site",
        size: 0,
        type: "type",
        official: true,
        published_at: "published_at",
        id: "id",
      },
    ],
  };

  test("Close button", () => {
    const closeBtnTestId = "VideoModal-CloseBtn";

    const expectedModalOpenResult = { open: false };
    const setModalOpenMock = jest.fn((fn: any) =>
      expect(fn()).toEqual(expectedModalOpenResult)
    );

    render(
      <VideoModal
        modalOpen={{ open: true, initialIndex: 0 }}
        setModalOpen={setModalOpenMock}
        videos={fakeVideos}
      />,
      { container: document.body.appendChild(main) }
    );

    fireEvent.click(screen.getByTestId(closeBtnTestId));
    expect(setModalOpenMock).toBeCalledTimes(1);
  });

  test("Next button", () => {});

  test("Previous button", () => {});

  test("Video div appearance", () => {});
});
