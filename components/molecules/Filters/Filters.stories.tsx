import Filters from "./Filters";
import { IPayload } from "types/story";

const payload: IPayload = {
  title: "MOLECULES/Filters",
  component: "Filters",
};
export default payload;

export const Basic = (args: any) => <Filters {...args} />;
Basic.args = {};
