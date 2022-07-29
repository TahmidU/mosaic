import FullScreenSearchMenu from "./FullScreenSearchMenu";
import { IPayload } from "types/story";

const payload: IPayload = {
  title: "MOLECULES/FullScreenSearchMenu",
  component: FullScreenSearchMenu,
};
export default payload;

export const Basic = (args: any) => <FullScreenSearchMenu {...args} />;
Basic.args = {};
