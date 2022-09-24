import Carousel from ".";
import { IPayload } from "types/story";
import { fakeDiscoverMovie } from "resources/test_resources/DiscoverMovie";
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
      carouselData={fakeDiscoverMovie}
      customVideos={[fakeVideos]}
      fullImageURL
      {...args}
    />
  </>
);
Basic.args = {};
Basic.parameters = { controls: { include: [] } };
