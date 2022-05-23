import { IPayload } from "types/story";
import Navbar from "./Navbar";

const payload: IPayload = {
  title: "ORGANISMS/Navbar",
  component: Navbar,
};
export default payload;

export const Basic = (args: any) => <Navbar {...args} />;
Basic.args = {};
