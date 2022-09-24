import React, { KeyboardEvent } from "react";
import { cleanup, fireEvent, render, screen } from "utils/test-config";

import Input from ".";

afterEach(cleanup);

describe("Input", () => {
  test("Render Prefix and Postfix nodes stateless variant", () => {
    const expectedPrefixText = "I am a prefix";
    const expectedPostfixText = "I am a postfix";

    const PrefixNode = (props: any) => <span>{expectedPrefixText}</span>;
    const PostfixNode = (props: any) => <span>{expectedPostfixText}</span>;

    render(<Input prefix={<PrefixNode />} postfix={<PostfixNode />} />);

    expect(
      screen.getByText(expectedPrefixText, { selector: "span" })
    ).toBeDefined();
    expect(
      screen.getByText(expectedPostfixText, { selector: "span" })
    ).toBeDefined();
  });

  test("Render Prefix and Postfix nodes stateful variant", () => {
    const expectedPrefixText = "I am a prefix";
    const expectedPostfixText = "I am a postfix";

    const PrefixNode = (props: any) => <span>{expectedPrefixText}</span>;
    const PostfixNode = (props: any) => <span>{expectedPostfixText}</span>;

    render(
      <Input
        variant="stateful"
        prefix={<PrefixNode />}
        postfix={<PostfixNode />}
      />
    );

    expect(
      screen.getByText(expectedPrefixText, { selector: "span" })
    ).toBeDefined();
    expect(
      screen.getByText(expectedPostfixText, { selector: "span" })
    ).toBeDefined();
  });

  test("Input on enter", () => {
    const expectedTestId = "Input-Input";
    const expectedKey = "Enter";
    const onKeyDownMock = jest.fn((e: KeyboardEvent<HTMLInputElement>) => {
      expect(e.key).toBe(expectedKey);
    });

    render(<Input onKeyDown={onKeyDownMock} />);

    const inputElement = screen.getByTestId(expectedTestId);
    fireEvent.keyDown(inputElement, {
      key: expectedKey,
      code: expectedKey,
      charCode: 13,
    });
  });

  test("Input text stateless variant", () => {
    const onTextChangeMock = jest.fn();

    const expectedTestId = "Input-Input";
    const expectedInput = "TestString";

    render(<Input onTextChange={onTextChangeMock} />);

    const inputElement = screen.getByTestId(expectedTestId);

    fireEvent.change(inputElement, { target: { value: expectedInput } });
    expect(onTextChangeMock).toBeCalledTimes(1);
    expect(inputElement).toHaveValue(expectedInput);
  });

  test("Value prop stateful variant", () => {
    const expectedTestId = "Input-Input";
    const expectedInput = "TestString";

    render(<Input variant="stateful" value={expectedInput} />);

    const inputElement = screen.getByTestId(expectedTestId);

    fireEvent.change(inputElement, { target: { value: expectedInput } });
    expect(inputElement).toHaveValue(expectedInput);
  });
});
