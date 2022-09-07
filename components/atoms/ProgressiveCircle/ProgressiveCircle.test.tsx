import "jest-styled-components";

import ProgressiveCircle from "./ProgressiveCircle";
import TestThemeProvider from "components/atoms/Helper/TestThemeProvider";
import getTheme from "resources/themes";
import { render } from "utils/test-config";
import renderer from "react-test-renderer";

describe("ProgressiveCircle", () => {
  const lightTheme = getTheme("light");

  test("Show state styling", async () => {
    const width = 30,
      height = 30,
      radius = 30,
      strokeWidth = 4,
      circumference = Math.ceil(2 * Math.PI * radius);

    const expectedStrokeDashoffset = "0";

    const expectedContainerStyle = `
      position: absolute;
      width: ${width}px;
      height: ${height}px;
      transform: rotate(-90deg);
      overflow: visible;
    `;

    const expectedAnimCircleStyle = `
      position: absolute;
      stroke: ${lightTheme.almostBlack};
      stroke-width: ${strokeWidth};
      stroke-dasharray: ${circumference};
      stroke-linecap: round;
    `;

    const { getByTestId } = render(
      <ProgressiveCircle
        show
        width={width}
        height={height}
        radius={radius}
        strokeWidth={strokeWidth}
      />
    );

    await new Promise((r) => setTimeout(r, 2000));

    const container = getByTestId("ProgressiveCircleContainer");
    const circle = getByTestId("ProgressiveCircleAnimatedCircle");

    expect(container).toHaveStyle(expectedContainerStyle);
    expect(circle).toHaveStyle(expectedAnimCircleStyle);
    // For some reason jest can't get stroke-dashoffset using toHaveStyle()
    expect(circle.getAttribute("stroke-dashoffset")).toEqual(
      expectedStrokeDashoffset
    );
  });

  test("Hide state styling", async () => {
    const width = 30,
      height = 30,
      radius = 30,
      strokeWidth = 4,
      circumference = Math.ceil(2 * Math.PI * radius);

    const expectedStrokeDashoffset = `${circumference}`;

    const expectedContainerStyle = `
      position: absolute;
      width: ${width}px;
      height: ${height}px;
      transform: rotate(-90deg);
      overflow: visible;
    `;

    const expectedAnimCircleStyle = `
      position: absolute;
      stroke: ${lightTheme.almostBlack};
      stroke-width: ${strokeWidth};
      stroke-dasharray: ${circumference};
      stroke-linecap: round;
    `;

    const { getByTestId } = render(
      <ProgressiveCircle
        show={false}
        width={width}
        height={height}
        radius={radius}
        strokeWidth={strokeWidth}
      />
    );

    await new Promise((r) => setTimeout(r, 2000));

    const container = getByTestId("ProgressiveCircleContainer");
    const circle = getByTestId("ProgressiveCircleAnimatedCircle");

    expect(container).toHaveStyle(expectedContainerStyle);
    expect(circle).toHaveStyle(expectedAnimCircleStyle);
    // For some reason jest can't get stroke-dashoffset using toHaveStyle()
    expect(circle.getAttribute("stroke-dashoffset")).toEqual(
      expectedStrokeDashoffset
    );
  });

  test("Snapshot after animation complete (wait 2s)", async () => {
    const width = 30,
      height = 30,
      radius = 30,
      strokeWidth = 4;

    const rendered = renderer.create(
      <TestThemeProvider>
        <ProgressiveCircle
          width={width}
          height={height}
          radius={radius}
          strokeWidth={strokeWidth}
        />
      </TestThemeProvider>
    );
    const tree = rendered.toJSON();

    await new Promise((r) => setTimeout(r, 2000));
    expect(tree).toMatchSnapshot();
  });

  test("Snapshot initial state", () => {
    const width = 30,
      height = 30,
      radius = 30,
      strokeWidth = 4;

    const rendered = renderer.create(
      <TestThemeProvider>
        <ProgressiveCircle
          width={width}
          height={height}
          radius={radius}
          strokeWidth={strokeWidth}
        />
      </TestThemeProvider>
    );
    const tree = rendered.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
