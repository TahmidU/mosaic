import Navbar from "./Navbar";
import { StoryUtils } from "../../../resources/utils";

const payload = {
  title: StoryUtils.storyTitle("ORGANISMS", "Navbar"),
  component: Navbar,
};
export default payload;

export const Basic = (args: any) => <Navbar {...args} />;
Basic.args = {};
