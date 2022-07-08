import {
  Container,
  ExternalLinkIcon,
  FacebookIcon,
  InstagramIcon,
  MainSection,
  Socials,
  StarRatingStyle,
  SubSection,
  TitleBlock,
  TwitterIcon,
} from "./styles";

import { IMovieDetails } from "types/movie";
import { Links } from "utils";
import { ReactElement } from "react";
import { dateFormatter } from "utils/TextUtils";
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
            {dateFormatter(movie.release_date)} |{" "}
            {movie.genres.map((_genre) => _genre.name).join(", ")} |{" "}
            {shortenRuntime(movie.runtime)}
          </span>
        </TitleBlock>
        <StarRatingStyle rating={movie.vote_average} />
        <Socials>
          <ExternalLinkIcon />
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
        </Socials>
      </MainSection>
      <SubSection></SubSection>
    </Container>
  );
}
