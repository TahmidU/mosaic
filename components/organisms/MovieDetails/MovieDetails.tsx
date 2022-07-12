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
import { ReactElement } from "react";
import { shortenRuntime } from "utils/MathUtils";

interface IMovieDetailsProps {
  movieDetails?: IMovieDetails;
  tvDetails?: ITVDetails;
}

export default function MovieDetail({
  movieDetails,
  tvDetails,
}: IMovieDetailsProps): ReactElement {
  if (!movieDetails && !tvDetails) return <></>;

  return (
    <Container
      variant="vertical_image"
      src={
        movieDetails?.poster_path
          ? `${Links.tmdbImageURL}original${movieDetails?.poster_path}`
          : `${Links.tmdbImageURL}original${tvDetails?.poster_path}`
      }
      imageWidth={379}
      imageHeight={580}
    >
      <MainSection>
        <TitleBlock>
          <span>
            {movieDetails?.original_title || tvDetails?.original_name}
          </span>
          <span>
            {dateFormatter(movieDetails?.release_date) ||
              dateFormatter(tvDetails?.first_air_date)}{" "}
            |{" "}
            {movieDetails?.genres.map((_genre) => _genre.name).join(", ") ||
              tvDetails?.genres.map((_genre) => _genre.name).join(", ")}
            {movieDetails ? ` | ${shortenRuntime(movieDetails?.runtime)}` : ""}
          </span>
        </TitleBlock>
        <StarRatingStyle
          rating={movieDetails?.vote_average || tvDetails?.vote_average || 0}
        />

        <Socials>
          {movieDetails?.homepage ? (
            <a
              target="_blank"
              href={movieDetails?.homepage}
              rel="noopener noreferrer"
            >
              <ExternalLinkIcon />
            </a>
          ) : tvDetails?.homepage ? (
            <a
              target="_blank"
              href={tvDetails?.homepage}
              rel="noopener noreferrer"
            >
              <ExternalLinkIcon />
            </a>
          ) : (
            <></>
          )}

          {movieDetails?.external_ids?.facebook_id ? (
            <a
              target="_blank"
              href={`${Links.facebookURL}${movieDetails?.external_ids?.facebook_id}`}
              rel="noopener noreferrer"
            >
              <FacebookIcon />
            </a>
          ) : tvDetails?.external_ids?.facebook_id ? (
            <a
              target="_blank"
              href={`${Links.facebookURL}${tvDetails?.external_ids?.facebook_id}`}
              rel="noopener noreferrer"
            >
              <FacebookIcon />
            </a>
          ) : (
            <></>
          )}

          {movieDetails?.external_ids?.instagram_id ? (
            <a
              target="_blank"
              href={`${Links.instagramURL}${movieDetails?.external_ids?.instagram_id}`}
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </a>
          ) : tvDetails?.external_ids?.instagram_id ? (
            <a
              target="_blank"
              href={`${Links.instagramURL}${tvDetails?.external_ids?.instagram_id}`}
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </a>
          ) : (
            <></>
          )}

          {movieDetails?.external_ids?.twitter_id ? (
            <a
              target="_blank"
              href={`${Links.twitterURL}${movieDetails?.external_ids?.twitter_id}`}
              rel="noopener noreferrer"
            >
              <TwitterIcon />
            </a>
          ) : tvDetails?.external_ids?.twitter_id ? (
            <a
              target="_blank"
              href={`${Links.twitterURL}${tvDetails?.external_ids?.twitter_id}`}
              rel="noopener noreferrer"
            >
              <TwitterIcon />
            </a>
          ) : (
            <></>
          )}
        </Socials>
      </MainSection>
      <SubSection>
        <p>
          <span>Original Language</span>
          <span>
            {movieDetails?.original_language || tvDetails?.original_language}
          </span>
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
          movieDetails["watch/providers"]?.results?.GB !== undefined && (
            <>
              <WatchOn>
                <span>Purchase On (GB)</span>
                <>
                  {movieDetails["watch/providers"]?.results?.GB?.buy?.map(
                    (_purchase_on, index) => (
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
                    )
                  )}
                </>
              </WatchOn>
            </>
          )}

        {movieDetails &&
        movieDetails["watch/providers"]?.results?.GB !== undefined ? (
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
          tvDetails["watch/providers"]?.results?.GB !== undefined ? (
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
