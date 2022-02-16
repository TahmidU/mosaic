import SlideButton from ".";
import { storyTitle } from "../../../../resources/utils/story";

const payload = {
  title: storyTitle("ATOMS", "SlideButton"),
  component: SlideButton,
};
export default payload;

export const Basic = (args: any) => (
  <div style={{ position: "absolute", right: "50%", bottom: "50%" }}>
    <SlideButton {...args} />
  </div>
);
Basic.args = {
  variant: "right",
};
