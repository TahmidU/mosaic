import { IPayload } from "types/story";
import SelectorComponent from "./SelectorComponent";

const payload: IPayload = {
  title: "ATOMS/SelectorComponent",
  component: SelectorComponent,
};
export default payload;

export const Basic = (args: any) => <SelectorComponent {...args} />;
Basic.args = {};
