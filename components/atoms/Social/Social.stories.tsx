import { IPayload } from "types/story";
import Social from "./Social";

const payload: IPayload = {
  title: "ATOMS/Social",
  component: Social,
};
export default payload;

export const Basic = (args: any) => <Social {...args} />;
Basic.args = {};
