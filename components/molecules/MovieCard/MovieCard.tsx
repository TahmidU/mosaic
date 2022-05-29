import { Container, MovieImage, MovieText, Wrapper } from "./styles";

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
        <MovieImage src={src} width={150} height={225} />
      </Wrapper>
      <MovieText>
        <span>{movieTitle}</span>
        <span>{movieReleaseDate}</span>
      </MovieText>
    </Container>
  );
}
