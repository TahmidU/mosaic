import DropdownComponent from "./DropdownComponent";
import { IPayload } from "types/story";

const payload: IPayload = {
  title: "ATOMS/DropdownComponent",
  component: DropdownComponent,
};
export default payload;

export const Basic = (args: any) => <DropdownComponent {...args} />;
Basic.args = {};
