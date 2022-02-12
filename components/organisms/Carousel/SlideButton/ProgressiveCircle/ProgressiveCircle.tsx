import { AnimatedCircle, Container } from "./styles";

import { ReactElement } from "react";

interface ProgressiveCircleProps {
  width: number;
  height: number;
  radius: number;
  strokeWidth: number;
}

export default function ProgressiveCircle(): ReactElement {
  return (
    <Container>
      <AnimatedCircle cx="80" cy="80" r={60} />
    </Container>
  );
}
