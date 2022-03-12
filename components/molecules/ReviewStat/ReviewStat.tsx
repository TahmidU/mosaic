import { Container, ProgCircle } from "./styles";

import AnimatedProgressProvider from "components/atoms/AnimatedProgressProvider";
import { ReactElement } from "react";
import { buildStyles } from "react-circular-progressbar";
import { easeQuadInOut } from "d3-ease";

interface ReviewStatProps {
  percentage: number;
  className?: string;
}

export default function ReviewStat({
  percentage,
  className,
}: ReviewStatProps): ReactElement {
  return (
    <Container className={className} data-testid="ReviewStatContainer">
      <AnimatedProgressProvider
        valueStart={0}
        valueEnd={percentage}
        duration={1.4}
        easingFunction={easeQuadInOut}
      >
        {(value: any) => {
          const roundedValue = Math.round(value);
          return (
            <ProgCircle
              value={value}
              text={`${roundedValue}%`}
              styles={buildStyles({
                pathTransition: "none",
                pathColor: `rgba(56, 255, 76, 1)`,
                trailColor: "#e8e8e8",
              })}
            />
          );
        }}
      </AnimatedProgressProvider>
    </Container>
  );
}
