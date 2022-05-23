import { IPayload } from "types/story";
import ProgressiveBar from ".";

const payload: IPayload = {
  title: "ATOMS/ProgressiveBar",
  component: ProgressiveBar,
};
export default payload;

export const Basic = (args: any) => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ProgressiveBar {...args} />
    </div>
  );
};
Basic.args = {
  pause: false,
  duration: 3,
  trigger: () => console.log("Anim finished"),
};
