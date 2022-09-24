import CastList from "./CastList";
import { IPayload } from "types/story";
import { fakeMovieData } from "resources/test_resources/MovieDetails";

const payload: IPayload = {
  title: "ORGANISMS/CastList",
  component: CastList,
};
export default payload;

export const Basic = (args: any) => (
  <CastList details={fakeMovieData} {...args} />
);
Basic.args = {};
Basic.parameters = {
  controls: {
    include: [],
  },
};
