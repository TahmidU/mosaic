import Navbar from "./Navbar";
import { titles } from "../../../resources/utils/story";

const payload = {
  title: `${titles.organisms}/Navbar`,
  component: Navbar,
};
export default payload;

export const Basic = (args: any) => <Navbar {...args} />;
Basic.args = {};
