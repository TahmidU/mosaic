import Checkbox from "./Checkbox";
import { IPayload } from "types/story";

const payload: IPayload = {
  title: "ATOMS/Checkbox",
  component: Checkbox,
};
export default payload;

export const Basic = (args: any) => <Checkbox {...args} />;
Basic.args = {};
