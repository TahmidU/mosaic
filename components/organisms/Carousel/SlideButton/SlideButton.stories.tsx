import SlideButton from ".";
import { storyTitle } from "../../../../resources/utils/story";

const payload = {
  title: storyTitle("ATOMS", "SlideButton"),
  component: SlideButton,
};
export default payload;

export const Basic = (args: any) => (
  <div>
    <SlideButton {...args} />
  </div>
);
Basic.args = {};
