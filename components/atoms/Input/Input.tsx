import { ChangeEvent, KeyboardEvent, ReactElement } from "react";
import { Container, InputStyle } from "./styles";

type Variant = "stateless" | "stateful";

interface IInputProps {
  variant?: Variant;
  onTextChange?: (text: string) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  postfix?: ReactElement<any, any>;
  prefix?: ReactElement<any, any>;
  className?: string;
}

export default function Input({
  variant = "stateless",
  onTextChange,
  onKeyDown,
  postfix,
  prefix,
  className,
}: IInputProps): ReactElement {
  const PostfixNode = () => (postfix ? postfix : <></>),
    PrefixNode = () => (prefix ? prefix : <></>);

  if (variant === "stateful") return <></>;

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
      />
      <PostfixNode />
    </Container>
  );
}
