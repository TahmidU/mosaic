import CastCard from "./CastCard";
import { IPayload } from "types/story";
import { fakeMovieData } from "resources/test_resources/MovieDetails";

const payload: IPayload = {
  title: "MOLECULES/CastCard",
  component: CastCard,
};
export default payload;

export const Basic = (args: any) => (
  <CastCard person={fakeMovieData.credits?.cast[0]} {...args} />
);
Basic.args = {};
