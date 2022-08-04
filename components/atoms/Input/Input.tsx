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
}: IInputProps): ReactElement {
  const PostfixNode = () => (postfix ? postfix : <></>),
    PrefixNode = () => (prefix ? prefix : <></>);

  const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    onTextChange?.(text);
  };

  if (variant === "stateful") {
    return (
      <Container className={className}>
        <PrefixNode />
        <InputStyle
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
    <Container className={className}>
      <PrefixNode />
      <InputStyle onChange={onHandleChange} onKeyDown={onKeyDown} type={type} />
      <PostfixNode />
    </Container>
  );
}
