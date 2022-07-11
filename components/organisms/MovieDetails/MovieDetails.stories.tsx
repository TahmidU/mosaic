import { FakeMovieData } from "../../../resources/TestResources/MovieDetails";
import { IPayload } from "types/story";
import MovieDetails from "./MovieDetails";

const payload: IPayload = {
  title: "ORGANISMS/MovieDetails",
  component: MovieDetails,
};
export default payload;

export const Basic = (args: any) => (
  <MovieDetails movieDetails={FakeMovieData} {...args} />
);
Basic.args = {};
