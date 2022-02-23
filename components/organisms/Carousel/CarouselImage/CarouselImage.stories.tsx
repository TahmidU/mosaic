import CarouselImage from ".";
import { storyTitle } from "../../../../resources/utils/story";

const payload = {
  title: storyTitle("ATOMS", "ProgressiveBar"),
  component: CarouselImage,
};
export default payload;

export const Basic = (args: any) => <CarouselImage {...args} />;
Basic.args = {};
