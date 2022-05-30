import { Container } from "./styles";
import { ReactElement } from "react";
import Star from "./Star";
import { v4 as uuidv4 } from "uuid";

interface IStarRatingProps {
  rating: number;
}

export default function StarRating({ rating }: IStarRatingProps): ReactElement {
  const ratingPercentage = rating / 10;
  const starRating = ratingPercentage * 5;

  return (
    <Container>
      {[...Array(5)].map((_, index) => {
        const applyRating = starRating - index;

        if (applyRating > 1) {
          return (
            <Star
              key={index}
              uniqueId={`${uuidv4()}-${index}`}
              percentage="100%"
            />
          );
        }

        if (applyRating > 0) {
          return (
            <Star
              key={index}
              uniqueId={`${uuidv4()}-${index}`}
              percentage={`${applyRating * 100}%`}
            />
          );
        }

        return (
          <Star key={index} uniqueId={`${uuidv4()}-${index}`} percentage="0%" />
        );
      })}
    </Container>
  );
}
