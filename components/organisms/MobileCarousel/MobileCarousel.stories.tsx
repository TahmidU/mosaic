import { FakeDiscoverMovie } from "./TestResources/data";
import { IPayload } from "types/story";
import MobileCarousel from "./MobileCarousel";

const payload: IPayload = {
  title: "ORGANISMS/MobileCarousel",
  component: MobileCarousel,
};
export default payload;

export const Basic = (args: any) => (
  <MobileCarousel carouselData={FakeDiscoverMovie} localImages {...args} />
);
Basic.args = {};
