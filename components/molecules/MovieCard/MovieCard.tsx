import { Container, MovieImage, MovieText, Wrapper } from "./styles";
import { ReactElement, ReactNode } from "react";

import StarRating from "../StarRating";

type Variant = "default" | "more_detailed";

export interface IMovieCardProps {
  variant?: Variant;
  children?: ReactNode;
  className?: string;
  src: string;
  review?: number;
  movieTitle?: string;
  movieReleaseDate?: string;
}

export default function MovieCard({
  variant = "default",
  children,
  className,
  src,
  review,
  movieTitle,
  movieReleaseDate,
}: IMovieCardProps): ReactElement {
  if (variant === "more_detailed") {
    return (
      <Container className={className}>
        <Wrapper>
          <MovieImage src={src} width={150} height={225} />
        </Wrapper>
        <MovieText>{children}</MovieText>
      </Container>
    );
  }

  return (
    <Container className={className}>
      <Wrapper>
        <MovieImage src={src} width={150} height={225} />
      </Wrapper>
      <MovieText>
        <span>{movieTitle}</span>
        <StarRating rating={review || 0} />
        <span>{movieReleaseDate}</span>
      </MovieText>
    </Container>
  );
}
