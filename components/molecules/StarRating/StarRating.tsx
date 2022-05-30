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
      {[...Array(5)].map((_, index) => {
        const applyRating = starRating - index;
        console.log(applyRating);

        if (applyRating > 1) {
          console.log("100%");
          return <Star key={index} percentage="100%" />;
        }

        if (applyRating > 0) {
          console.log(`${applyRating * 100}%`);
          return <Star key={index} percentage="50%" />;
        }

        console.log("0%");
        return <Star key={index} percentage="0%" />;
      })}
    </Container>
  );
}
