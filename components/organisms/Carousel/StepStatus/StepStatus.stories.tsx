import { IPayload } from "types/story";
import StepStatus from ".";

const payload: IPayload = {
  title: "ATOMS/StepStatus",
  component: StepStatus,
};
export default payload;

export const Basic = (args: any) => <StepStatus {...args} />;
Basic.args = {
  enabled: false,
};
