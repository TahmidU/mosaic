import Clip from "./Clip";
import { IPayload } from "types/story";

const payload: IPayload = {
  title: "ATOMS/Clip",
  component: Clip,
};
export default payload;

export const Basic = (args: any) => <Clip {...args} />;
Basic.args = {
  YTKey: `GfbNLLcrItI`,
  title: "Easter Eggs",
  type: "Featurette",
};
