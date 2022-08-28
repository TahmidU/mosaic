import { ReactElement, ReactNode } from "react";

import { Container } from "./styles";

interface ICardProps {
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
}

export default function Card({
  className,
  children,
  onClick,
}: ICardProps): ReactElement {
  return (
    <Container className={className} onClick={onClick}>
      {children}
    </Container>
  );
}
