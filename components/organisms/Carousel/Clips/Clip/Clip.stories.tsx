import Clip from "./Clip";
import { StoryUtils } from "resources/utils";

const payload = {
  title: StoryUtils.storyTitle("ATOMS", "Clip"),
  component: Clip,
};
export default payload;

export const Basic = (args: any) => <Clip {...args} />;
Basic.args = {};
