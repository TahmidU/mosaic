import { StoryUtils } from "resources/utils";
import VideoModal from "./VideoModal";

const payload = {
  title: StoryUtils.storyTitle("MOLECULES", "VideoModal"),
  component: VideoModal,
};
export default payload;

export const Basic = () => <VideoModal />;
