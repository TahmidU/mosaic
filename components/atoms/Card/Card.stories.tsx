import Card from "./Card";
import { IPayload } from "types/story";

const payload: IPayload = {
  title: "ATOMS/Card",
  component: Card,
};
export default payload;

export const Basic = (args: any) => <Card {...args} />;
