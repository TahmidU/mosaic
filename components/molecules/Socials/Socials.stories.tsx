import { IPayload } from "types/story";
import Socials from "./Socials";

const payload: IPayload = {
  title: "MOLECULES/Socials",
  component: Socials,
};
export default payload;

export const Basic = (args: any) => <Socials {...args} />;
Basic.arg = {
  href: "",
  variant: "external",
};
