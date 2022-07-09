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
import { dateFormatter, findInCrewNamesByJob } from "utils/TextUtils";

import { IMovieDetails } from "types/movie";
import { Links } from "utils";
import { ReactElement } from "react";
import { shortenRuntime } from "utils/MathUtils";

interface IMovieDetailsProps {
  movie: IMovieDetails;
}

export default function ({ movie }: IMovieDetailsProps): ReactElement {
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
      <SubSection>
        <p>
          <span>Original Language</span>
          <span>{movie.original_language}</span>
        </p>
        <p>
          <span>Director(s)</span>
          <span>
            {movie.credits?.crew &&
              findInCrewNamesByJob(movie.credits?.crew, "Director")}
          </span>
        </p>
        <p>
          <span>Writer(s)</span>
          <span>
            {movie.credits?.crew &&
              findInCrewNamesByJob(movie.credits?.crew, "Writer")}
          </span>
        </p>
        <p>
          <span>Budget</span>
          <span>${movie.budget}</span>
        </p>
        <p>
          <span>Revenue</span>
          <span>${movie.revenue}</span>
        </p>
      </SubSection>
    </Container>
  );
}
