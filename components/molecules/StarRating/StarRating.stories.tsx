import { IPayload } from "types/story";
import StarRating from "./StarRating";

const payload: IPayload = {
  title: "MOLECULES/StarRating",
  component: StarRating,
};
export default payload;

export const Basic = (args: any) => <StarRating {...args} />;
Basic.args = {
  rating: 5.5,
};
