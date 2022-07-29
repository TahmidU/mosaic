import { IPayload } from "types/story";
import MobileSearchBtn from "./MobileSearchBtn";

const payload: IPayload = {
  title: "ATOMS/MobileSearchBtn",
  component: MobileSearchBtn,
};
export default payload;

export const Basic = (args: any) => <MobileSearchBtn {...args} />;
Basic.args = {};
