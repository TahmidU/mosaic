import { ReactElement, ReactNode } from "react";

import { Container } from "./styles";

interface ICardProps {
  className?: string;
  children?: ReactNode;
}

export default function Card({
  className,
  children,
}: ICardProps): ReactElement {
  return <Container className={className}>{children}</Container>;
}
