import { IPayload } from "types/story";
import ScrollDownBtn from "./ScrollDownBtn";

const payload: IPayload = {
  title: "MOLECULES/ScrollDownBtn",
  component: ScrollDownBtn,
};
export default payload;

export const Basic = (args: any) => <ScrollDownBtn {...args} />;
Basic.args = {};
