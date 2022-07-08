import {
  Container,
  MainSection,
  Socials,
  SubSection,
  TitleBlock,
} from "./styles";

import { IMovieDetails } from "types/movie";
import { Links } from "utils";
import { ReactElement } from "react";
import StarRating from "components/molecules/StarRating";
import { shortenRuntime } from "utils/MathUtils";

interface IMovieDetailsProps {
  movie: IMovieDetails;
}

export default function ({ movie }: IMovieDetailsProps): ReactElement {
  console.log(movie);

  return (
    <Container
      variant="vertical_image"
      src={`${Links.tmdbImageURL}original${movie.poster_path}`}
      imageWidth={379}
      imageHeight={580}
    >
      <MainSection>
        <TitleBlock>
          <span>{movie.original_title}</span>
          <span>
            {movie.release_date} |{" "}
            {movie.genres.map((_genre) => _genre.name).join(", ")} |{" "}
            {shortenRuntime(movie.runtime)}
          </span>
        </TitleBlock>
        <StarRating rating={movie.vote_average} />
        <Socials></Socials>
      </MainSection>
      <SubSection></SubSection>
    </Container>
  );
}
