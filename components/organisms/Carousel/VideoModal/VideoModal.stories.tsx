import { IPayload } from "types/story";
import VideoModal from "./VideoModal";

const payload: IPayload = {
  title: "MOLECULES/VideoModal",
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
