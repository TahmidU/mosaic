import { StoryUtils } from "resources/utils";
import VideoModal from "./VideoModal";

const payload = {
  title: StoryUtils.storyTitle("MOLECULES", "VideoModal"),
  component: VideoModal,
};
export default payload;

export const Basic = (args: any) => <VideoModal {...args} />;
Basic.args = {
  open: true,
  onClose: () => {},
  onNext: () => {},
  onPrev: () => {},
};
