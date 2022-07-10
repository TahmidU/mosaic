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

interface IMovieDetailsProps {
  movieDetail: IMovieDetails;
}

export default function ({ movieDetail }: IMovieDetailsProps): ReactElement {
  return (
    <Container
      variant="vertical_image"
      src={`${Links.tmdbImageURL}original${movieDetail.poster_path}`}
      imageWidth={379}
      imageHeight={580}
    >
      <MainSection>
        <TitleBlock>
          <span>{movieDetail.original_title}</span>
          <span>
            {dateFormatter(movieDetail.release_date)} |{" "}
            {movieDetail.genres.map((_genre) => _genre.name).join(", ")} |{" "}
            {shortenRuntime(movieDetail.runtime)}
          </span>
        </TitleBlock>
        <StarRatingStyle rating={movieDetail.vote_average} />

        <Socials>
          <a
            target="_blank"
            href={movieDetail.homepage}
            rel="noopener noreferrer"
          >
            <ExternalLinkIcon />
          </a>
          {movieDetail?.external_ids?.facebook_id && (
            <a
              target="_blank"
              href={`${Links.facebookURL}${movieDetail.external_ids.facebook_id}`}
              rel="noopener noreferrer"
            >
              <FacebookIcon />
            </a>
          )}
          {movieDetail?.external_ids?.instagram_id && (
            <a
              target="_blank"
              href={`${Links.instagramURL}${movieDetail.external_ids.instagram_id}`}
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </a>
          )}
          {movieDetail?.external_ids?.twitter_id && (
            <a
              target="_blank"
              href={`${Links.twitterURL}${movieDetail.external_ids.twitter_id}`}
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
          <span>{movieDetail.original_language}</span>
        </p>
        <p>
          <span>Director(s)</span>
          <span>
            {movieDetail.credits?.crew &&
              findInCrewNamesByJob(movieDetail.credits.crew, "Director")}
          </span>
        </p>
        <p>
          <span>Writer(s)</span>
          <span>
            {movieDetail.credits?.crew &&
              findInCrewNamesByJob(movieDetail.credits.crew, "Writer")}
          </span>
        </p>
        <p>
          <span>Budget</span>
          <span>${numberWithCommas(movieDetail.budget)}</span>
        </p>
        <p>
          <span>Revenue</span>
          <span>${numberWithCommas(movieDetail.revenue)}</span>
        </p>
      </SubSection>
    </Container>
  );
}
