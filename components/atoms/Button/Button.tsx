import { ReactElement, ReactNode } from "react";

import { TextButtonContainer } from "./styles";

type Variant = "text";

interface IButtonProps {
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

export default function Button({
  variant = "text",
  className,
  children,
}: IButtonProps): ReactElement {
  return (
    <TextButtonContainer className={className}>{children}</TextButtonContainer>
  );
}
