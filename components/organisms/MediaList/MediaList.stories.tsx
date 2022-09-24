import { IPayload } from "types/story";
import MediaList from "./MediaList";
import { fakeVideos } from "resources/test_resources/Videos";

const payload: IPayload = {
  title: "ORGANISMS/MediaList",
  component: MediaList,
};
export default payload;

export const Basic = (args: any) => (
  <MediaList videoData={fakeVideos} {...args} />
);
Basic.args = {};
Basic.parameters = {
  controls: {
    include: [],
  },
};
