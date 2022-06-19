import { IPayload } from "types/story";
import SubList from "./SubList";

const payload: IPayload = {
  title: "MOLECULES/SubList",
  component: SubList,
};
export default payload;

export const Basic = (args: any) => <SubList {...args} />;
Basic.args = {};
