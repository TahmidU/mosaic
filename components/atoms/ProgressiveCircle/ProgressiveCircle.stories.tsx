import { IPayload } from "types/story";
import ProgressiveCircle from ".";

const payload: IPayload = {
  title: "ATOMS/ProgressiveCircle",
  component: ProgressiveCircle,
};
export default payload;

export const Basic = (args: any) => (
  <ProgressiveCircle {...args} style={{ top: "100px", right: "50%" }} />
);
Basic.args = {
  width: 30,
  height: 30,
  radius: 30,
  strokeWidth: 4,
  duration: 1.75,
};
