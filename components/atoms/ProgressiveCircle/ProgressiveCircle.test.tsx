import "jest-styled-components";

import ProgressiveCircle from "./ProgressiveCircle";
import TestThemeProvider from "components/atoms/Helper/TestThemeProvider";
import getTheme from "resources/themes";
import { render } from "utils/test-config";
import renderer from "react-test-renderer";

describe("ProgressiveCircle", () => {
  test("Show state light theme styling", async () => {
    // Given
    const width = 30,
      height = 30,
      radius = 30,
      strokeWidth = 4,
      circumference = Math.ceil(2 * Math.PI * radius),
      lightTheme = getTheme("light");

    // When
    const { getByTestId } = render(
      <ProgressiveCircle
        show
        width={width}
        height={height}
        radius={radius}
        strokeWidth={strokeWidth}
      />
    );

    // Then
    await new Promise((r) => setTimeout(r, 1800));

    expect(getByTestId("ProgressiveCircleContainer")).toHaveStyleRule(
      "position",
      "absolute"
    );
    expect(getByTestId("ProgressiveCircleContainer")).toHaveStyleRule(
      "width",
      `${width}px`
    );
    expect(getByTestId("ProgressiveCircleContainer")).toHaveStyleRule(
      "height",
      `${height}px`
    );
    expect(getByTestId("ProgressiveCircleContainer")).toHaveStyleRule(
      "transform",
      "rotate(-90deg)"
    );
    expect(getByTestId("ProgressiveCircleContainer")).toHaveStyleRule(
      "overflow",
      "visible"
    );

    expect(getByTestId("ProgressiveCircleAnimatedCircle")).toHaveStyleRule(
      "position",
      "absolute"
    );
    expect(getByTestId("ProgressiveCircleAnimatedCircle")).toHaveStyleRule(
      "stroke",
      lightTheme.almostBlack
    );
    expect(getByTestId("ProgressiveCircleAnimatedCircle")).toHaveStyleRule(
      "stroke-width",
      `${strokeWidth}`
    );
    expect(getByTestId("ProgressiveCircleAnimatedCircle")).toHaveStyleRule(
      "stroke-dasharray",
      `${circumference}`
    );
    expect(getByTestId("ProgressiveCircleAnimatedCircle")).toHaveStyleRule(
      "stroke-linecap",
      "round"
    );
  });

  test("Hide state light theme styling", async () => {
    // Given
    const width = 30,
      height = 30,
      radius = 30,
      strokeWidth = 4,
      circumference = Math.ceil(2 * Math.PI * radius),
      strokeDashoffset = circumference,
      lightTheme = getTheme("light");

    // When
    const { getByTestId } = render(
      <ProgressiveCircle
        show
        width={width}
        height={height}
        radius={radius}
        strokeWidth={strokeWidth}
      />
    );

    const rendered = renderer.create(
      <TestThemeProvider>
        <ProgressiveCircle
          show
          width={width}
          height={height}
          radius={radius}
          strokeWidth={strokeWidth}
        />
      </TestThemeProvider>
    );
    const tree = rendered.toJSON();

    // Then
    await new Promise((r) => setTimeout(r, 1800));

    expect(getByTestId("ProgressiveCircleContainer")).toHaveStyleRule(
      "position",
      "absolute"
    );
    expect(getByTestId("ProgressiveCircleContainer")).toHaveStyleRule(
      "width",
      `${width}px`
    );
    expect(getByTestId("ProgressiveCircleContainer")).toHaveStyleRule(
      "height",
      `${height}px`
    );
    expect(getByTestId("ProgressiveCircleContainer")).toHaveStyleRule(
      "transform",
      "rotate(-90deg)"
    );
    expect(getByTestId("ProgressiveCircleContainer")).toHaveStyleRule(
      "overflow",
      "visible"
    );

    expect(getByTestId("ProgressiveCircleAnimatedCircle")).toHaveStyleRule(
      "position",
      "absolute"
    );
    expect(getByTestId("ProgressiveCircleAnimatedCircle")).toHaveStyleRule(
      "stroke",
      lightTheme.almostBlack
    );
    expect(getByTestId("ProgressiveCircleAnimatedCircle")).toHaveStyleRule(
      "stroke-width",
      `${strokeWidth}`
    );
    expect(getByTestId("ProgressiveCircleAnimatedCircle")).toHaveStyleRule(
      "stroke-dasharray",
      `${circumference}`
    );
    expect(rendered.root.findByType("circle").props.strokeDashoffset).toBe(
      strokeDashoffset
    ); //toHaveStyleRule does not recognise stroke-dashoffset
    expect(getByTestId("ProgressiveCircleAnimatedCircle")).toHaveStyleRule(
      "stroke-linecap",
      "round"
    );
  });

  test("Snapshot wait", async () => {
    // Given
    const width = 30,
      height = 30,
      radius = 30,
      strokeWidth = 4;

    // When
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

    // Then
    await new Promise((r) => setTimeout(r, 1800));
    expect(tree).toMatchSnapshot();
  });

  test("Snapshot non-wait", () => {
    // Given
    const width = 30,
      height = 30,
      radius = 30,
      strokeWidth = 4;

    // When
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

    // Then
    expect(tree).toMatchSnapshot();
  });
});
