import Carousel from ".";
import { FakeDiscoverMovie } from "resources/test_resources/DiscoverMovie";
import { IPayload } from "types/story";
import { fakeVideos } from "resources/test_resources/Videos";

const payload: IPayload = {
  title: "ORGANISMS/Carousel",
  component: Carousel,
};
export default payload;

export const Basic = (args: any) => (
  <>
    <div id="modalPortal"></div>
    <Carousel
      carouselData={FakeDiscoverMovie}
      customVideos={[fakeVideos]}
      fullImageURL
      {...args}
    />
  </>
);
Basic.args = {};
Basic.parameters = { controls: { include: [] } };
