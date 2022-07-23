import { FakeMovieData } from "resources/TestResources/MovieDetails";
import { FakeTVData } from "resources/TestResources/TVDetails";
import { IPayload } from "types/story";
import MovieDetails from "./MovieDetails";

const payload: IPayload = {
  title: "ORGANISMS/MovieDetails",
  component: MovieDetails,
};
export default payload;

export const Movie = (args: any) => (
  <MovieDetails movieDetails={FakeMovieData} {...args} />
);
Movie.args = {};

export const TV = (args: any) => (
  <MovieDetails tvDetails={FakeTVData} {...args} />
);
TV.args = {};
