import HorizontalList from "./HorizontalList";
import { IPayload } from "types/story";

const payload: IPayload = {
  title: "ATOMS/HorizontalList",
  component: HorizontalList,
};
export default payload;

export const Basic = (args: any) => <HorizontalList {...args} />;
