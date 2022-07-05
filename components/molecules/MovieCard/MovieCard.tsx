import { CardStyle } from "./styles";
import { ReactElement } from "react";
import StarRating from "../StarRating";

export interface IMovieCardProps {
  className?: string;
  src: string;
  review: number;
  movieTitle: string;
  movieReleaseDate: string;
}

export default function MovieCard({
  className,
  src,
  review,
  movieTitle,
  movieReleaseDate,
}: IMovieCardProps): ReactElement {
  return (
    <CardStyle variant="vertical_image" className={className} src={src}>
      <span>{movieTitle}</span>
      <StarRating rating={review || 0} />
      <span>{movieReleaseDate}</span>
    </CardStyle>
  );
}
