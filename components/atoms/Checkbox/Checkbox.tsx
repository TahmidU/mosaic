import { ReactElement, ReactNode } from "react";

import { Container } from "./styles";

interface ICheckboxProps {
  children: ReactNode;
  onClick?: () => void;
  isSelected: boolean;
  className?: string;
}

export default function Checkbox({
  children,
  onClick,
  isSelected,
  className,
}: ICheckboxProps): ReactElement {
  return (
    <Container className={className} isSelected={isSelected} onClick={onClick}>
      {children}
    </Container>
  );
}
