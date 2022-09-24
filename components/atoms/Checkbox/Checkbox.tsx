import { ReactElement, ReactNode } from "react";

import { Container } from "./styles";

interface ICheckboxProps {
  children: ReactNode;
  onClick?: () => void;
  isSelected: boolean;
  className?: string;
  testId?: string;
}

export default function Checkbox({
  children,
  onClick,
  isSelected,
  className,
  testId = "Checkbox",
}: ICheckboxProps): ReactElement {
  return (
    <Container
      data-testid={testId}
      className={className}
      isSelected={isSelected}
      onClick={onClick}
    >
      {children}
    </Container>
  );
}
