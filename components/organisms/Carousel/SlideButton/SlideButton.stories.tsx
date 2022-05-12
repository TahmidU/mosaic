import SlideButton from ".";
import { StoryUtils } from "../../../../resources/utils";

const payload = {
  title: StoryUtils.storyTitle("MOLECULES", "SlideButton"),
  component: SlideButton,
};
export default payload;

export const Basic = (args: any) => (
  <div
    style={{
      position: "absolute",
      right: "50%",
      bottom: "50%",
    }}
  >
    <SlideButton {...args} />
  </div>
);
Basic.args = {
  variant: "right",
};
