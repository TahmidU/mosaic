import { Container, StarGradient, StarStroke, StarWrapper } from "./styles";

import { ReactElement } from "react";

interface IStarRatingProps {
  className?: string;
  rating: number;
}

export default function StarRating({
  className,
  rating,
}: IStarRatingProps): ReactElement {
  const ratingPercentage = rating * 10;
  const starRating = (rating / 10) * 5;

  return (
    <Container className={className}>
      <StarWrapper>
        <StarStroke>
          <StarGradient rating={ratingPercentage}></StarGradient>
        </StarStroke>
      </StarWrapper>

      <span>{starRating.toFixed(2)}/5</span>
    </Container>
  );
}
