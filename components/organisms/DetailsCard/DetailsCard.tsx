import {
  Container,
  ExternalLinkIcon,
  FacebookIcon,
  InstagramIcon,
  MainSection,
  StarRatingStyle,
  SubSection,
  TitleBlock,
  TwitterIcon,
  WatchOn,
} from "./styles";
import {
  dateFormatter,
  findInCrewNamesByJob,
  numberWithCommas,
} from "utils/TextUtils";

import { IMovieDetails } from "types/movie";
import { ITVDetails } from "types/tv";
import Image from "next/image";
import { Links } from "utils";
import { MediaType } from "types/tv_movies";
import { ReactElement } from "react";
import { SocialTypes } from "types/socials";
import Socials from "components/molecules/Socials";
import { shortenRuntime } from "utils/MathUtils";

interface IMovieDetailsProps {
  details?: IMovieDetails & ITVDetails;
  movieDetails?: IMovieDetails;
  tvDetails?: ITVDetails;
  mediaType: MediaType;
  className?: string;
}

export default function MovieDetail({
  details,
  mediaType,
  movieDetails,
  tvDetails,
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
        {movieDetails && (
          <>
            <p>
              <span>Director(s)</span>
              <span>
                {findInCrewNamesByJob(movieDetails?.credits?.crew, "Director")}
              </span>
            </p>
            <p>
              <span>Writer(s)</span>
              <span>
                {findInCrewNamesByJob(movieDetails?.credits?.crew, "Writer")}
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
          </>
        )}
        {tvDetails && (
          <>
            <p>
              <span>Type</span>
              <span>{tvDetails.type}</span>
            </p>
            <p>
              <span>Number of Seasons</span>
              <span>{tvDetails.number_of_seasons}</span>
            </p>
            <p>
              <span>Number of Episodes</span>
              <span>{tvDetails.number_of_episodes}</span>
            </p>
          </>
        )}

        {movieDetails &&
          movieDetails["watch/providers"]?.results?.GB !== undefined &&
          movieDetails["watch/providers"]?.results?.GB?.buy && (
            <>
              <WatchOn>
                <span>Purchase On (GB)</span>
                <>
                  {movieDetails["watch/providers"]?.results?.GB?.buy?.map(
                    (_purchase_on, index) => {
                      return (
                        <div key={index}>
                          <div>
                            <Image
                              alt="logo"
                              src={
                                _purchase_on.logo_path
                                  ? `${Links.tmdbImageURL}original${_purchase_on.logo_path}`
                                  : ""
                              }
                              width={24}
                              height={24}
                              layout="responsive"
                            />
                          </div>

                          <span>{_purchase_on.provider_name}</span>
                        </div>
                      );
                    }
                  )}
                </>
              </WatchOn>
            </>
          )}

        {movieDetails &&
        movieDetails["watch/providers"]?.results?.GB !== undefined &&
        movieDetails["watch/providers"]?.results?.GB?.flatrate ? (
          <WatchOn>
            <span>Stream On (GB)</span>
            <>
              {movieDetails["watch/providers"]?.results?.GB?.flatrate?.map(
                (_stream_on, index) => (
                  <div key={index}>
                    <div>
                      <Image
                        alt="logo"
                        src={
                          _stream_on.logo_path
                            ? `${Links.tmdbImageURL}original${_stream_on.logo_path}`
                            : ""
                        }
                        width={24}
                        height={24}
                        layout="responsive"
                      />
                    </div>

                    <span>{_stream_on.provider_name}</span>
                  </div>
                )
              )}
            </>
          </WatchOn>
        ) : tvDetails &&
          tvDetails["watch/providers"]?.results?.GB !== undefined &&
          tvDetails["watch/providers"]?.results?.GB?.flatrate ? (
          <WatchOn>
            <span>Stream On (GB)</span>
            <>
              {tvDetails["watch/providers"]?.results?.GB?.flatrate?.map(
                (_stream_on, index) => (
                  <div key={index}>
                    <div>
                      <Image
                        alt="logo"
                        src={
                          _stream_on.logo_path
                            ? `${Links.tmdbImageURL}original${_stream_on.logo_path}`
                            : ""
                        }
                        width={24}
                        height={24}
                        layout="responsive"
                      />
                    </div>

                    <span>{_stream_on.provider_name}</span>
                  </div>
                )
              )}
            </>
          </WatchOn>
        ) : (
          <></>
        )}
      </SubSection>
    </Container>
  );
}
