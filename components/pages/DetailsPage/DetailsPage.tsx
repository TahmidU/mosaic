import { Container, ExtraDetailSection, ShortDetailSection } from "./styles";

import { IMovieDetails } from "types/movie";
import MovieDetails from "components/organisms/MovieDetails";
import { ReactElement } from "react";

interface IDetailsPageProps {
  movieDetails: IMovieDetails;
}

export default function DetailsPage({
  movieDetails,
}: IDetailsPageProps): ReactElement {
  console.log(movieDetails);
  return (
    <Container>
      <ShortDetailSection>
        <MovieDetails movieDetails={movieDetails} />
      </ShortDetailSection>
      <ExtraDetailSection>Goodbye</ExtraDetailSection>
    </Container>
  );
}
