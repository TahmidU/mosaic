import { IPayload } from "types/story";
import MobileCarousel from "./MobileCarousel";

const payload: IPayload = {
  title: "MOLECULES/MobileCarousel",
  component: MobileCarousel,
};
export default payload;

export const Basic = (args: any) => <Basic {...args} />;
Basic.args = {};
