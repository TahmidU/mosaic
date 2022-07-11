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
import {
  dateFormatter,
  findInCrewNamesByJob,
  numberWithCommas,
} from "utils/TextUtils";

import { IMovieDetails } from "types/movie";
import { Links } from "utils";
import { ReactElement } from "react";
import { shortenRuntime } from "utils/MathUtils";

type Variant = "movie" | "tv";
interface IMovieDetailsProps {
  movieDetails: IMovieDetails;
  variant?: Variant;
}

export default function MovieDetail({
  movieDetails,
  variant = "movie",
}: IMovieDetailsProps): ReactElement {
  return (
    <Container
      variant="vertical_image"
      src={`${Links.tmdbImageURL}original${movieDetails.poster_path}`}
      imageWidth={379}
      imageHeight={580}
    >
      <MainSection>
        <TitleBlock>
          <span>{movieDetails.original_title}</span>
          <span>
            {dateFormatter(movieDetails.release_date)} |{" "}
            {movieDetails.genres.map((_genre) => _genre.name).join(", ")} |{" "}
            {shortenRuntime(movieDetails.runtime)}
          </span>
        </TitleBlock>
        <StarRatingStyle rating={movieDetails.vote_average} />

        <Socials>
          <a
            target="_blank"
            href={movieDetails.homepage}
            rel="noopener noreferrer"
          >
            <ExternalLinkIcon />
          </a>
          {movieDetails?.external_ids?.facebook_id && (
            <a
              target="_blank"
              href={`${Links.facebookURL}${movieDetails.external_ids.facebook_id}`}
              rel="noopener noreferrer"
            >
              <FacebookIcon />
            </a>
          )}
          {movieDetails?.external_ids?.instagram_id && (
            <a
              target="_blank"
              href={`${Links.instagramURL}${movieDetails.external_ids.instagram_id}`}
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </a>
          )}
          {movieDetails?.external_ids?.twitter_id && (
            <a
              target="_blank"
              href={`${Links.twitterURL}${movieDetails.external_ids.twitter_id}`}
              rel="noopener noreferrer"
            >
              <TwitterIcon />
            </a>
          )}
        </Socials>
      </MainSection>
      <SubSection>
        <p>
          <span>Original Language</span>
          <span>{movieDetails.original_language}</span>
        </p>
        <p>
          <span>Director(s)</span>
          <span>
            {movieDetails.credits?.crew &&
              findInCrewNamesByJob(movieDetails.credits.crew, "Director")}
          </span>
        </p>
        <p>
          <span>Writer(s)</span>
          <span>
            {movieDetails.credits?.crew &&
              findInCrewNamesByJob(movieDetails.credits.crew, "Writer")}
          </span>
        </p>
        <p>
          <span>Budget</span>
          <span>${numberWithCommas(movieDetails.budget)}</span>
        </p>
        <p>
          <span>Revenue</span>
          <span>${numberWithCommas(movieDetails.revenue)}</span>
        </p>
      </SubSection>
    </Container>
  );
}
