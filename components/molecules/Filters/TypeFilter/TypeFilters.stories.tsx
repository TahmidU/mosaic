import { IPayload } from "types/story";
import TypeFilter from "./TypeFilter";

const payload: IPayload = {
  title: "MOLECULES/TypeFilter",
  component: TypeFilter,
};
export default payload;

export const Basic = (args: any) => <TypeFilter {...args} />;
Basic.args = {};
