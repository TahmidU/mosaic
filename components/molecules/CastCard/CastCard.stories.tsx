import CastCard from "./CastCard";
import { FakeMovieData } from "resources/TestResources/MovieDetails";
import { IPayload } from "types/story";

const payload: IPayload = {
  title: "MOLECULES/CastCard",
  component: CastCard,
};
export default payload;

export const Basic = (args: any) => (
  <CastCard person={FakeMovieData.credits?.cast[0]} {...args} />
);
Basic.args = {};
