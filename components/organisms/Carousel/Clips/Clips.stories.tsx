import Clips from "./Clips";
import { StoryUtils } from "resources/utils";

const payload = {
  title: StoryUtils.storyTitle("MOLECULES", "Clips"),
  component: Clips,
};
export default payload;

export const Basic = (args: any) => <Clips {...args} />;
Basic.args = {};
