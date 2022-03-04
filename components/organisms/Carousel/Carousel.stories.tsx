import Carousel from ".";
import { StoryUtils } from "../../../resources/utils";

const payload = {
  title: StoryUtils.storyTitle("ORGANISMS", "Carousel"),
  component: Carousel,
};
export default payload;

export const Basic = (args: any) => <Carousel {...args} />;
Basic.args = {};
