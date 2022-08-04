import { IPayload } from "types/story";
import MobileSearchInput from "./MobileSearchInput";

const payload: IPayload = {
  title: "ORGANISMS/MobileSearchInput",
  component: MobileSearchInput,
};
export default payload;

export const Basic = (args: any) => <MobileSearchInput {...args} />;
Basic.args = {};
