import { Container } from "./styles";
import { IMovieDetails } from "types/api/explore";
import { Links } from "utils";
import { ReactElement } from "react";

interface IMovieDetailsProps {
  movie: IMovieDetails;
}

export default function ({ movie }: IMovieDetailsProps): ReactElement {
  console.log(`${Links.tmdbImageURL}original${movie.poster_path}`);
  return (
    <Container
      variant="vertical_image"
      src={`${Links.tmdbImageURL}original${movie.poster_path}`}
    >
      <div></div>
    </Container>
  );
}
