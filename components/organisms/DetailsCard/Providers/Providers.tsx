import { Container, WatchOn } from "./styles";

import { IMovieDetails } from "types/movie";
import { ITVDetails } from "types/tv";
import Image from "next/image";
import { Links } from "utils";
import { MediaType } from "types/tv_movies";
import { ReactElement } from "react";

interface IProvidersProps {
  variant: MediaType;
  details: IMovieDetails & ITVDetails;
}

export default function Providers({
  variant,
  details,
}: IProvidersProps): ReactElement {
  if (variant === "movie") {
    if (details["watch/providers"]?.results?.GB !== undefined) {
      return (
        <Container>
          {details["watch/providers"]?.results?.GB?.buy && (
            <p>
              <span>Purchase On (GB)</span>
              <>
                {details["watch/providers"]?.results?.GB?.buy?.map(
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
            </p>
          )}
          {details["watch/providers"]?.results?.GB?.flatrate && (
            <p>
              <span>Stream On (GB)</span>
              <>
                {details["watch/providers"]?.results?.GB?.flatrate?.map(
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
            </p>
          )}
        </Container>
      );
    }
  }

  if (variant === "tv") {
    if (details["watch/providers"]?.results?.GB?.flatrate) {
      return (
        <Container>
          <p>
            <span>Stream On (GB)</span>
            <>
              {details["watch/providers"]?.results?.GB?.flatrate?.map(
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
          </p>
        </Container>
      );
    }
  }

  return <></>;
}
