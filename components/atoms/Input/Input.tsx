import {
  ChangeEvent,
  HTMLInputTypeAttribute,
  KeyboardEvent,
  ReactElement,
} from "react";
import { Container, InputStyle } from "./styles";

type Variant = "stateless" | "stateful";

interface IInputProps {
  variant?: Variant;
  value?: string;
  onTextChange?: (text: string) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  postfix?: ReactElement<any, any>;
  prefix?: ReactElement<any, any>;
  type?: HTMLInputTypeAttribute;
  className?: string;
  testId?: string;
}

export default function Input({
  variant = "stateless",
  value,
  onTextChange,
  onKeyDown,
  postfix,
  prefix,
  type = "text",
  className,
  testId = "Input",
}: IInputProps): ReactElement {
  const PostfixNode = () => (postfix ? postfix : <></>),
    PrefixNode = () => (prefix ? prefix : <></>);

  const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    onTextChange?.(text);
  };

  if (variant === "stateful") {
    return (
      <Container data-testid={testId} className={className}>
        <PrefixNode />
        <InputStyle
          data-testid={`${testId}-Input`}
          value={value}
          onChange={onHandleChange}
          onKeyDown={onKeyDown}
          type={type}
        />
        <PostfixNode />
      </Container>
    );
  }

  return (
    <Container data-testid={testId} className={className}>
      <PrefixNode />
      <InputStyle
        data-testid={`${testId}-Input`}
        onChange={onHandleChange}
        onKeyDown={onKeyDown}
        type={type}
      />
      <PostfixNode />
    </Container>
  );
}
