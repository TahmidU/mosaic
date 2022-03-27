import StepStatus from ".";
import { StoryUtils } from "../../../../resources/utils";

const payload = {
  title: StoryUtils.storyTitle("ATOMS", "StepStatus"),
  component: StepStatus,
};
export default payload;

export const Basic = (args: any) => <StepStatus {...args} />;
Basic.args = {
  enabled: false,
};
