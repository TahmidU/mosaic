import Carousel from ".";
import { storyTitle } from "../../../resources/utils/story";

const payload = {
  title: storyTitle("ATOMS", "Carousel"),
  component: Carousel,
};
export default payload;

export const Basic = (args: any) => <Carousel {...args} />;
Basic.args = {};
