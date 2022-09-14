import { Container, StarGradient, StarStroke, StarWrapper } from "./styles";

import { ReactElement } from "react";

interface IStarRatingProps {
  className?: string;
  rating: number;
  testId?: string;
}

export default function StarRating({
  className,
  rating,
  testId = "StarRating",
}: IStarRatingProps): ReactElement {
  const ratingPercentage = rating * 10;
  const starRating = (rating / 10) * 5;

  return (
    <Container data-testid={testId} className={className}>
      <StarWrapper>
        <StarStroke>
          <StarGradient
            data-testid={`${testId}-StarsGradient`}
            rating={ratingPercentage}
          />
        </StarStroke>
      </StarWrapper>

      <span>{starRating.toFixed(2)}/5</span>
    </Container>
  );
}
