import { AnimatedCircle, Container } from "./styles";

import { ReactElement } from "react";
import { produceProgressiveCircleAnimVariant } from "./animation-variants";

interface ProgressiveCircleProps {
  width: number;
  height: number;
  radius: number;
  strokeWidth: number;
  duration?: number;
}

export default function ProgressiveCircle({
  width,
  height,
  radius,
  strokeWidth,
  duration = 3,
}: ProgressiveCircleProps): ReactElement {
  console.log(produceProgressiveCircleAnimVariant(radius));

  return (
    <Container width={width} height={height}>
      <AnimatedCircle
        cx={`${width / 2}`}
        cy={`${height / 2}`}
        r={radius}
        strokeWidth={strokeWidth}
        initial="hide"
        variants={produceProgressiveCircleAnimVariant(radius)}
        animate="show"
        transition={{ duration: duration }}
      />
    </Container>
  );
}
