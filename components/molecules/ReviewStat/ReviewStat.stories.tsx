import { IPayload } from "types/story";
import ReviewStat from ".";

const payload: IPayload = {
  title: "MOLECULES/ReviewStat",
  component: ReviewStat,
};
export default payload;

export const Basic = (args: any) => <ReviewStat {...args} />;
Basic.args = { percentage: 60 };
