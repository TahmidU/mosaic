import { ReactElement, ReactNode } from "react";

import { TextButtonContainer } from "./styles";

type Variant = "text";

interface IButtonProps {
  variant?: Variant;
  className?: string;
  children: ReactNode;
  onClick: () => void;
}

export default function Button({
  variant = "text",
  className,
  children,
  onClick,
}: Partial<IButtonProps>): ReactElement {
  return (
    <TextButtonContainer className={className} onClick={onClick}>
      {children}
    </TextButtonContainer>
  );
}
