import { CastCardStyle, CastHorizontalList, CastListWrapper } from "./styles";

import { IMovieDetails } from "types/movie";
import { ITVDetails } from "types/tv";
import { ReactElement } from "react";

interface ICastListProps {
  movieDetails: IMovieDetails | ITVDetails;
}

export default function CastList({
  movieDetails,
}: ICastListProps): ReactElement {
  return (
    <CastHorizontalList title="Cast">
      {movieDetails.credits?.cast.map((_actor, index) => (
        <CastListWrapper key={index}>
          <CastCardStyle person={_actor} />
        </CastListWrapper>
      ))}
    </CastHorizontalList>
  );
}
