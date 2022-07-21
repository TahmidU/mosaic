import { IPayload } from "types/story";
import Socials from "./Socials";

const payload: IPayload = {
  title: "ATOMS/Socials",
  component: Socials,
};
export default payload;

export const Basic = (args: any) => <Socials {...args} />;
