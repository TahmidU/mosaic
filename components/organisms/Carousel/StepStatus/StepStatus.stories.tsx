import StepStatus from ".";
import { storyTitle } from "../../../../resources/utils/story";

const payload = {
  title: storyTitle("ATOMS", "StepStatus"),
  component: StepStatus,
};
export default payload;

export const Basic = (args: any) => <StepStatus {...args} />;
Basic.args = {
  enabled: false,
};
