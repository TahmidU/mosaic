import CarouselImage from ".";
import { StoryUtils } from "../../../../resources/utils";

const payload = {
  title: StoryUtils.storyTitle("ATOMS", "ProgressiveBar"),
  component: CarouselImage,
};
export default payload;

export const Basic = (args: any) => <CarouselImage {...args} />;
Basic.args = {};
