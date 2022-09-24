import { ReactElement, ReactNode } from "react";

import { Container } from "./styles";

interface ICardProps {
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
  testId?: string;
}

export default function Card({
  className,
  children,
  onClick,
  testId = "Card",
}: ICardProps): ReactElement {
  return (
    <Container data-testid={testId} className={className} onClick={onClick}>
      {children}
    </Container>
  );
}
