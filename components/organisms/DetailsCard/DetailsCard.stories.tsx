import DetailsCard from "./DetailsCard";
import { IPayload } from "types/story";
import { fakeMovieData } from "resources/test_resources/MovieDetails";
import { fakeTVData } from "resources/test_resources/TVDetails";

const payload: IPayload = {
  title: "ORGANISMS/DetailsCard",
  component: DetailsCard,
};
export default payload;

export const Movie = (args: any) => (
  <DetailsCard movieDetails={fakeMovieData} {...args} />
);
Movie.args = {};

export const TV = (args: any) => (
  <DetailsCard tvDetails={fakeTVData} {...args} />
);
TV.args = {};
