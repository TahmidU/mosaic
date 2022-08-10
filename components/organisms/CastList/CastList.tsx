import { CastCardStyle, CastHorizontalList, CastListWrapper } from "./styles";

import { IMovieDetails } from "types/movie";
import { ITVDetails } from "types/tv";
import { ReactElement } from "react";

interface ICastListProps {
  movieDetails: IMovieDetails | ITVDetails;
  className?: string;
}

export default function CastList({
  movieDetails,
  className,
}: ICastListProps): ReactElement {
  return (
    <CastHorizontalList title="Cast" className={className}>
      {movieDetails.credits?.cast.map((_actor, index) => (
        <CastListWrapper key={index}>
          <CastCardStyle person={_actor} />
        </CastListWrapper>
      ))}
    </CastHorizontalList>
  );
}
