import { Container, ImageWrapper, MovieImage, StarRatingStyle } from "./styles";

import { ReactElement } from "react";

interface IMovieCardProps {
  className?: string;
  src: string;
  review: number;
  movieTitle: string;
  movieReleaseDate: string;
  onClick?: () => void;
}

export default function MovieCard({
  className,
  src,
  review,
  movieTitle,
  movieReleaseDate,
  onClick,
}: IMovieCardProps): ReactElement {
  return (
    <Container className={className} onClick={onClick}>
      <ImageWrapper>
        <MovieImage
          alt={movieTitle}
          src={src}
          width={150}
          height={225}
          layout="responsive"
        />
      </ImageWrapper>

      <div>
        <span>{movieTitle}</span>
        <StarRatingStyle rating={review || 0} />
        <span>{movieReleaseDate}</span>
      </div>
    </Container>
  );
}
