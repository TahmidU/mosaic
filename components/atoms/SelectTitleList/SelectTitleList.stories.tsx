import { IPayload } from "types/story";
import SelectTitleList from "./SelectTitleList";

const payload: IPayload = {
  title: "ATOMS/SelectTitleList",
  component: SelectTitleList,
};
export default payload;

export const Basic = (args: any) => <SelectTitleList {...args} />;
Basic.args = {};
