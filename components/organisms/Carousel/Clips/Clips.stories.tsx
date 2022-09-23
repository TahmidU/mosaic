import Clips from "./Clips";
import { IPayload } from "types/story";
import { fakeVideos } from "resources/testResources/Videos";

const payload: IPayload = {
  title: "MOLECULES/Clips",
  component: Clips,
};
export default payload;

export const Basic = (args: any) => <Clips videos={fakeVideos} {...args} />;
Basic.args = {};
Basic.parameters = {
  controls: { include: ["onClipClickedCallback"] },
};
