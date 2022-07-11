import { Container, ExtraDetailSection, ShortDetailSection } from "./styles";

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
      <ExtraDetailSection>Goodbye</ExtraDetailSection>
    </Container>
  );
}
