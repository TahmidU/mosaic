import DetailsCard from "./DetailsCard";
import { FakeMovieData } from "resources/TestResources/MovieDetails";
import { FakeTVData } from "resources/TestResources/TVDetails";
import { IPayload } from "types/story";

const payload: IPayload = {
  title: "ORGANISMS/DetailsCard",
  component: DetailsCard,
};
export default payload;

export const Movie = (args: any) => (
  <DetailsCard movieDetails={FakeMovieData} {...args} />
);
Movie.args = {};

export const TV = (args: any) => (
  <DetailsCard tvDetails={FakeTVData} {...args} />
);
TV.args = {};
