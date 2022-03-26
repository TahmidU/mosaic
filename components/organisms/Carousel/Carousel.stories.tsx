import Carousel from ".";
import { FakeDiscoverMovie } from "./TestResources/data";
import { StoryUtils } from "../../../resources/utils";

const payload = {
  title: StoryUtils.storyTitle("ORGANISMS", "Carousel"),
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
