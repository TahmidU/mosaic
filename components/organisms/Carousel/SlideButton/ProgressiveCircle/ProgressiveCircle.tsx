import { AnimatedCircle, Container } from "./styles";

import { ReactElement } from "react";
import { produceProgressiveCircleAnimVariant } from "./animation-variants";

interface ProgressiveCircleProps {
  width: number;
  height: number;
  radius: number;
  strokeWidth: number;
  duration?: number;
  show?: boolean;
  className?: string;
}

export default function ProgressiveCircle({
  width,
  height,
  radius,
  strokeWidth,
  duration = 1.75,
  show = true,
  className,
}: ProgressiveCircleProps): ReactElement {
  return (
    <Container width={width} height={height} className={className}>
      <AnimatedCircle
        cx={`${width / 2}`}
        cy={`${height / 2}`}
        r={radius}
        strokeWidth={strokeWidth}
        initial="hide"
        variants={produceProgressiveCircleAnimVariant(radius)}
        animate={show ? "show" : "hide"}
        transition={{ duration: duration }}
      />
    </Container>
  );
}
