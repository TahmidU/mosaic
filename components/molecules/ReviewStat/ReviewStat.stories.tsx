import ReviewStat from ".";
import { StoryUtils } from "resources/utils";

const payload = {
  title: StoryUtils.storyTitle("MOLECULES", "ReviewStat"),
  component: ReviewStat,
};
export default payload;

export const Basic = (args: any) => <ReviewStat {...args} />;
Basic.args = { percentage: 60 };
