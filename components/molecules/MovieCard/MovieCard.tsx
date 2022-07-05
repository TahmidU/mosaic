import { MovieImage, MovieText, Wrapper } from "./styles";
import { ReactElement, ReactNode } from "react";

import Card from "components/atoms/Card";
import StarRating from "../StarRating";

interface IMovieCardCommonProps {
  className?: string;
  src: string;
}

export interface IMovieCardMoreDetailedProps extends IMovieCardCommonProps {
  variant: "more_detailed";
  children: ReactNode;
}

export interface IMovieCardDefaultProps extends IMovieCardCommonProps {
  variant?: "default";
  review: number;
  movieTitle: string;
  movieReleaseDate: string;
}

export type IMovieCardProps =
  | IMovieCardMoreDetailedProps
  | IMovieCardDefaultProps;

export default function MovieCard(props: IMovieCardProps): ReactElement {
  const { variant, className, src } = props;

  if (variant === "more_detailed") {
    const { children } = props;

    return (
      <Card className={className}>
        <Wrapper>
          <MovieImage src={src} width={150} height={225} />
        </Wrapper>
        <MovieText>{children}</MovieText>
      </Card>
    );
  }

  const { movieTitle, review, movieReleaseDate } = props;
  return (
    <Card className={className}>
      <Wrapper>
        <MovieImage src={src} width={150} height={225} />
      </Wrapper>
      <MovieText>
        <span>{movieTitle}</span>
        <StarRating rating={review || 0} />
        <span>{movieReleaseDate}</span>
      </MovieText>
    </Card>
  );
}
