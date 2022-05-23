import Carousel from ".";
import { FakeDiscoverMovie } from "./TestResources/data";
import { IPayload } from "types/story";

const payload: IPayload = {
  title: "ORGANISMS/Carousel",
  component: Carousel,
};
export default payload;

export const Basic = (args: any) => (
  <Carousel carouselData={FakeDiscoverMovie} localImages {...args} />
);
Basic.args = {
  disableAutoSlide: false,
};
Basic.parameters = { controls: { include: ["disableAutoSlide"] } };
