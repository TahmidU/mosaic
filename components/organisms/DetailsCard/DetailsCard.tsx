import {
  Container,
  MainSection,
  StarRatingStyle,
  SubSection,
  TitleBlock,
} from "./styles";

import AdditionalDetails from "./AdditionalDetails";
import { IMovieDetails } from "types/movie";
import { ITVDetails } from "types/tv";
import { Links } from "utils";
import { MediaType } from "types/tv_movies";
import Providers from "./Providers";
import { ReactElement } from "react";
import { SocialTypes } from "types/socials";
import Socials from "components/molecules/Socials";
import { dateFormatter } from "utils/TextUtils";
import { shortenRuntime } from "utils/MathUtils";

interface IMovieDetailsProps {
  details?: IMovieDetails & ITVDetails;
  mediaType: MediaType;
  className?: string;
}

export default function MovieDetail({
  details,
  mediaType,
  className,
}: IMovieDetailsProps): ReactElement {
  if (!details) return <></>;

  // Socials
  const socialLinks = Object.keys(details?.external_ids).map(
    (_external_link: string, _index) => ({
      variant: _external_link.split("_")[0] as SocialTypes,
      href: details?.external_ids[_external_link],
    })
  );
  const externalLinks = [
    { variant: "external" as SocialTypes, href: details?.homepage },
    ...socialLinks,
  ];

  // TV or Movie Details
  const posterPath = `${Links.tmdbImageURL}original${details?.poster_path}`;
  const title = details?.original_title || details?.original_name;
  const releaseDate =
    dateFormatter(details?.release_date) ||
    dateFormatter(details?.first_air_date);
  const movieRuntime = ` | ${shortenRuntime(details?.runtime)}` || "";

  return (
    <Container
      className={className}
      variant="vertical_image"
      src={posterPath}
      imageWidth={379}
      imageHeight={580}
    >
      <MainSection>
        <TitleBlock>
          <span>{title}</span>
          <span>
            {releaseDate} |{" "}
            {details?.genres.map((_genre) => _genre.name).join(", ")}
            {movieRuntime}
          </span>
        </TitleBlock>
        <StarRatingStyle rating={details?.vote_average || 0} />

        {externalLinks && <Socials links={externalLinks} />}
      </MainSection>
      <SubSection>
        <p>
          <span>Original Language</span>
          <span>{details?.original_language}</span>
        </p>
        {details && <AdditionalDetails details={details} variant={mediaType} />}

        <Providers details={details} variant={mediaType} />
      </SubSection>
    </Container>
  );
}
