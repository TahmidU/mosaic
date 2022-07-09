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
import { ICrew, IMovieGenre } from "types/movie";
import { dateFormatter, findInCrewNamesByJob } from "utils/TextUtils";

import { ISocials } from "types/socials";
import { Links } from "utils";
import { ReactElement } from "react";
import { shortenRuntime } from "utils/MathUtils";

interface IMovieDetailsProps {
  posterPath: string;
  title: string;
  releaseDate: string;
  runtime: number;
  rating: number;
  genres: IMovieGenre[];
  homepage: string;
  externals?: ISocials;
  originalLanguage: string;
  budget: number;
  revenue: number;
  crew: ICrew[];
}

export default function ({
  posterPath,
  title,
  releaseDate,
  genres,
  runtime,
  rating,
  homepage,
  externals,
  originalLanguage,
  budget,
  revenue,
  crew,
}: IMovieDetailsProps): ReactElement {
  return (
    <Container
      variant="vertical_image"
      src={`${Links.tmdbImageURL}original${posterPath}`}
      imageWidth={379}
      imageHeight={580}
    >
      <MainSection>
        <TitleBlock>
          <span>{title}</span>
          <span>
            {dateFormatter(releaseDate)} |{" "}
            {genres.map((_genre) => _genre.name).join(", ")} |{" "}
            {shortenRuntime(runtime)}
          </span>
        </TitleBlock>
        <StarRatingStyle rating={rating} />
        {externals && (
          <Socials>
            <a target="_blank" href={homepage} rel="noopener noreferrer">
              <ExternalLinkIcon />
            </a>
            {externals.facebook_id && (
              <a
                target="_blank"
                href={`${Links.facebookURL}${externals.facebook_id}`}
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </a>
            )}
            {externals.instagram_id && (
              <a
                target="_blank"
                href={`${Links.instagramURL}${externals.instagram_id}`}
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </a>
            )}
            {externals.twitter_id && (
              <a
                target="_blank"
                href={`${Links.twitterURL}${externals.twitter_id}`}
                rel="noopener noreferrer"
              >
                <TwitterIcon />
              </a>
            )}
          </Socials>
        )}
      </MainSection>
      <SubSection>
        <p>
          <span>Original Language</span>
          <span>{originalLanguage}</span>
        </p>
        <p>
          <span>Director(s)</span>
          <span>{crew && findInCrewNamesByJob(crew, "Director")}</span>
        </p>
        <p>
          <span>Writer(s)</span>
          <span>{crew && findInCrewNamesByJob(crew, "Writer")}</span>
        </p>
        <p>
          <span>Budget</span>
          <span>${budget}</span>
        </p>
        <p>
          <span>Revenue</span>
          <span>${revenue}</span>
        </p>
      </SubSection>
    </Container>
  );
}
