import {
  CastCardStyle,
  CastListWrapper,
  Container,
  ExtraDetailSection,
  HorizontalListStyle,
  LinkBtn,
  ShortDetailSection,
} from "./styles";

import CastCard from "components/molecules/CastCard";
import HorizontalList from "components/molecules/HorizontalList";
import { IMovieDetails } from "types/movie";
import { ITVDetails } from "types/tv";
import { MediaType } from "types/tv_movies";
import MovieDetails from "components/organisms/MovieDetails";
import { ReactElement } from "react";

interface IDetailsPageProps {
  movieDetails?: IMovieDetails;
  tvDetails?: ITVDetails;
}

export default function DetailsPage({
  movieDetails,
  tvDetails,
}: IDetailsPageProps): ReactElement {
  return (
    <Container>
      <ShortDetailSection>
        <MovieDetails movieDetails={movieDetails} tvDetails={tvDetails} />
      </ShortDetailSection>
      <ExtraDetailSection>
        <div>
          <p>Description</p>
          <p>{movieDetails?.overview || tvDetails?.overview}</p>
        </div>

        <HorizontalListStyle title="Cast">
          {movieDetails
            ? movieDetails.credits?.cast.map((_actor, index) => (
                <CastListWrapper key={index}>
                  <CastCardStyle person={_actor} />
                </CastListWrapper>
              ))
            : tvDetails?.credits.cast.map((_actor, index) => <></>)}
        </HorizontalListStyle>

        <div>
          <p>Media</p>
        </div>
      </ExtraDetailSection>
    </Container>
  );
}
