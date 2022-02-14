import ProgressiveBar from ".";
import { storyTitle } from "../../../../resources/utils/story";
import { useState } from "react";

const payload = {
  title: storyTitle("ATOMS", "ProgressiveBar"),
  component: ProgressiveBar,
};
export default payload;

export const Basic = (args: any) => {
  const [state, setState] = useState(false);

  console.log(state);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div style={{ width: "100%", height: "100%" }}>
        <ProgressiveBar pause={state} />
      </div>
      <button onClick={() => setState((prev) => !prev)}>toggle pause</button>
    </div>
  );
};
Basic.args = {};
