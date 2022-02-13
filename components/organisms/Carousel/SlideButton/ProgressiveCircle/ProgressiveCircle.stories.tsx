import ProgressiveCircle from ".";
import { storyTitle } from "../../../../../resources/utils/story";

const payload = {
  title: storyTitle("ATOMS", "ProgressiveCircle"),
  component: ProgressiveCircle,
};
export default payload;

export const Basic = (args: any) => <ProgressiveCircle {...args} />;
Basic.args = {
  width: 60,
  height: 60,
  radius: 60,
  strokeWidth: 10,
};
