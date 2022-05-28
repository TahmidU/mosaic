import { IPayload } from "types/story";
import SlideButton from ".";

const payload: IPayload = {
  title: "MOLECULES/SlideButton",
  component: SlideButton,
};
export default payload;

export const Basic = (args: any) => (
  <div
    style={{
      position: "absolute",
      right: "50%",
      bottom: "50%",
    }}
  >
    <SlideButton {...args} />
  </div>
);
Basic.args = {
  variant: "right",
};
