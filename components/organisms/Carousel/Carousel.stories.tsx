import Carousel from ".";
import { FakeDiscoverMovie } from "resources/testResources/DiscoverMovie";
import { IPayload } from "types/story";

const payload: IPayload = {
  title: "ORGANISMS/Carousel",
  component: Carousel,
};
export default payload;

export const Basic = (args: any) => (
  <Carousel carouselData={FakeDiscoverMovie} {...args} />
);
Basic.args = {};
Basic.parameters = { controls: { include: [] } };
