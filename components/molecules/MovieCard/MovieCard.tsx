import { CardStyle } from "./styles";
import { ReactElement } from "react";
import StarRating from "../StarRating";

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
    <CardStyle
      variant="vertical_image"
      className={className}
      src={src}
      onClick={onClick}
    >
      <span>{movieTitle}</span>
      <StarRating rating={review || 0} />
      <span>{movieReleaseDate}</span>
    </CardStyle>
  );
}
