import CarouselImage from ".";
import { IPayload } from "types/story";

const payload: IPayload = {
  title: "ATOMS/ProgressiveBar",
  component: CarouselImage,
};
export default payload;

export const Basic = (args: any) => <CarouselImage {...args} />;
Basic.args = {};
