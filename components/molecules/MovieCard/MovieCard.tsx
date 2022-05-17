import {
  Container,
  MovieImage,
  MovieReview,
  MovieText,
  Wrapper,
} from "./styles";

import { ReactElement } from "react";

export interface IMovieCardProps {
  src: string;
  review: number;
  movieTitle: string;
  movieReleaseDate: string;
}

export default function MovieCard({
  src,
  review,
  movieTitle,
  movieReleaseDate,
}: IMovieCardProps): ReactElement {
  return (
    <Container>
      <Wrapper>
        <MovieImage src={src} />
        <MovieReview percentage={review * 10} />
      </Wrapper>
      <MovieText>
        <span>{movieTitle}</span>
        <span>{movieReleaseDate}</span>
      </MovieText>
    </Container>
  );
}
