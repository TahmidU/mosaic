import ProgressiveBar from ".";
import { storyTitle } from "../../../../resources/utils/story";
import { useState } from "react";

const payload = {
  title: storyTitle("ATOMS", "ProgressiveBar"),
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
