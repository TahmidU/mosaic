import { IPayload } from "types/story";
import Input from "./Input";

const payload: IPayload = {
  title: "ATOMS/Input",
  component: Input,
};
export default payload;

export const Basic = (args: any) => <Input {...args} />;
Basic.args = {};
