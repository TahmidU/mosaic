import { FakeMovieData } from "../../../resources/TestResources/MovieDetails";
import { IPayload } from "types/story";
import MovieDetails from "./MovieDetails";

const payload: IPayload = {
  title: "ORGANISMS/MovieDetails",
  component: MovieDetails,
};
export default payload;

export const Basic = (args: any) => (
  <MovieDetails
    posterPath={FakeMovieData.poster_path}
    title={FakeMovieData.title}
    releaseDate={FakeMovieData.release_date}
    genres={FakeMovieData.genres}
    runtime={FakeMovieData.runtime}
    rating={FakeMovieData.vote_average}
    homepage={FakeMovieData.homepage}
    externals={FakeMovieData.external_ids}
    originalLanguage={FakeMovieData.original_language}
    budget={FakeMovieData.budget}
    revenue={FakeMovieData.budget}
    crew={FakeMovieData.credits?.crew}
    {...args}
  />
);
Basic.args = {};
