import {
  ChangeEvent,
  HTMLInputTypeAttribute,
  KeyboardEvent,
  ReactElement,
} from "react";
import { Container, InputStyle } from "./styles";

interface IInputProps {
  onTextChange?: (text: string) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  postfix?: ReactElement<any, any>;
  prefix?: ReactElement<any, any>;
  type?: HTMLInputTypeAttribute;
  className?: string;
}

export default function Input({
  onTextChange,
  onKeyDown,
  postfix,
  prefix,
  type = "text",
  className,
}: IInputProps): ReactElement {
  const PostfixNode = () => (postfix ? postfix : <></>),
    PrefixNode = () => (prefix ? prefix : <></>);

  const onHandleStatelessTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    onTextChange?.(text);
  };

  return (
    <Container className={className}>
      <PrefixNode />
      <InputStyle
        onChange={onHandleStatelessTextChange}
        onKeyDown={onKeyDown}
        type={type}
      />
      <PostfixNode />
    </Container>
  );
}
