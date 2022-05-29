import { IPayload } from "types/story";
import Star from "./Star";

const payload: IPayload = {
  title: "ATOMS/Star",
  component: Star,
};
export default payload;

export const Basic = (args: any) => <Star {...args} />;
