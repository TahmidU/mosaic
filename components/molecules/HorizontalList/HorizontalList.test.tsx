import { cleanup, fireEvent, render, screen } from "utils/test-config";

import HorizontalList from "./HorizontalList";
import React from "react";

afterEach(cleanup);

describe("HorizontalList", () => {
  test("Title props", () => {
    const expectedTitle = "Horizontal Title";

    render(<HorizontalList title={expectedTitle}></HorizontalList>);

    expect(screen.getByText(expectedTitle)).toBeDefined();
  });

  test("Child appearance", async () => {
    const expectedChildNames = ["Child1", "Child2", "Child3"];

    render(
      <HorizontalList title="title">
        {expectedChildNames.map((_item, index) => (
          <span key={index}>{_item}</span>
        ))}
      </HorizontalList>
    );

    await new Promise((r) => setTimeout(r, 1300));

    expectedChildNames.forEach((_value) => {
      expect(expectedChildNames.includes(_value)).toBe(true);
    });
  });

  test("Loading elements appearance", async () => {
    const expectedChildNames = ["Child1", "Child2", "Child3"];

    const LoadingElements = (props: any) => {
      return (
        <div>
          {expectedChildNames.map((_item, index) => (
            <span key={index}>{_item}</span>
          ))}
        </div>
      );
    };
    render(
      <HorizontalList
        title="title"
        loading
        loadingElements={<LoadingElements />}
      ></HorizontalList>
    );

    await new Promise((r) => setTimeout(r, 1300));

    expectedChildNames.forEach((_value) => {
      expect(expectedChildNames.includes(_value)).toBe(true);
    });
  });

  test("Next button click", () => {});

  test("Previous button click", () => {});
});
