import CastList from "./CastList";
import { IPayload } from "types/story";

const payload: IPayload = {
  title: "ORGANISMS/CastList",
  component: CastList,
};
export default payload;

export const Basic = (args: any) => <CastList {...args} />;
Basic.args = {};
