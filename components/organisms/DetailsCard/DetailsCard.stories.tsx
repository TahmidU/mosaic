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
  <DetailsCard details={fakeMovieData} mediaType="movie" {...args} />
);
Movie.args = {};
Movie.parameters = {
  controls: {
    include: [],
  },
};

export const TV = (args: any) => (
  <DetailsCard details={fakeTVData} mediaType="tv" {...args} />
);
TV.args = {};
TV.parameters = {
  controls: {
    include: [],
  },
};
