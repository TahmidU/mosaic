import Clip from "./Clip";
import { StoryUtils } from "resources/utils";
import thumbnail from "./TestResources/hqdefault.jpg";

const payload = {
  title: StoryUtils.storyTitle("ATOMS", "Clip"),
  component: Clip,
};
export default payload;

export const Basic = (args: any) => <Clip {...args} />;
Basic.args = {
  local: true,
  YTKey: `/${thumbnail}`,
};
