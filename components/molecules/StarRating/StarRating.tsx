import { Container } from "./styles";
import { ReactElement } from "react";
import Star from "./Star";

interface IStarRatingProps {
  rating: number;
}

export default function StarRating({ rating }: IStarRatingProps): ReactElement {
  const ratingPercentage = rating / 10;
  const starRating = ratingPercentage * 5;

  return (
    <Container>
      {[...Array(5)]
        .map((_, index) => {
          const applyRating = starRating - index;

          if (applyRating > 1) {
            return "100%";
          }

          if (applyRating > 0) {
            return `${applyRating * 100}%`;
          }

          return "0%";
        })
        .map((_fill, index) => (
          <Star
            key={index}
            uniqueId={`MovieCardHomeRating${index}`}
            percentage={_fill}
          />
        ))}
    </Container>
  );
}
