import { findInCrewNamesByJob, numberWithCommas } from "utils/TextUtils";

import { IMovieDetails } from "types/movie";
import { ITVDetails } from "types/tv";
import { MediaType } from "types/tv_movies";
import { ReactElement } from "react";

interface IAdditionalDetailsProps {
  variant: MediaType;
  details: IMovieDetails & ITVDetails;
}

export default function AdditionalDetails({
  variant,
  details,
}: IAdditionalDetailsProps): ReactElement {
  if (variant === "movie") {
    let directors: string | undefined = "";
    let writers: string | undefined = "";
    if (details?.credits?.crew) {
      directors = findInCrewNamesByJob(details?.credits?.crew, "Director");
      writers = findInCrewNamesByJob(details?.credits?.crew, "Writer");
    }

    return (
      <>
        {directors && (
          <p>
            <span>Director(s)</span>
            <span>{directors}</span>
          </p>
        )}

        {writers && (
          <p>
            <span>Writer(s)</span>
            <span>{writers}</span>
          </p>
        )}

        <p>
          <span>Budget</span>
          <span>${numberWithCommas(details.budget)}</span>
        </p>

        <p>
          <span>Revenue</span>
          <span>${numberWithCommas(details.revenue)}</span>
        </p>
      </>
    );
  }

  return (
    <>
      {details?.type && (
        <p>
          <span>Type</span>
          <span>{details?.type}</span>
        </p>
      )}

      {details?.number_of_seasons && (
        <p>
          <span>Number of Seasons</span>
          <span>{details.number_of_seasons}</span>
        </p>
      )}

      {details?.number_of_episodes && (
        <p>
          <span>Number of Episodes</span>
          <span>{details.number_of_episodes}</span>
        </p>
      )}
    </>
  );
}
