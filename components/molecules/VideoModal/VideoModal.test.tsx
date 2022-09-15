import { cleanup, fireEvent, render, screen } from "utils/test-config";

import React from "react";
import VideoModal from "./VideoModal";
import getTheme from "resources/themes";

let container: any = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(cleanup);

describe("VideoModal", () => {
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

  test("Close button test", () => {
    const setModalOpenMock = jest.fn();
    const closeBtnTestId = "VideoModal-CloseBtn";
    const expectedSetterCalledWith = (prev: any) => ({
      initialIndex: 0,
      open: false,
    });

    render(
      <>
        <div id="modalPortal"></div>

        <VideoModal
          modalOpen={{ open: true, initialIndex: 0 }}
          setModalOpen={setModalOpenMock}
          videos={fakeVideos}
        />
      </>
    );

    //expect(setModalOpenMock).toHaveBeenCalledTimes(1);
    fireEvent.click(screen.getByTestId(closeBtnTestId));
    expect(setModalOpenMock).toHaveBeenCalledWith(expectedSetterCalledWith);
  });

  test("Next button", () => {});

  test("Previous button", () => {});

  test("Video div appearance", () => {});
});
