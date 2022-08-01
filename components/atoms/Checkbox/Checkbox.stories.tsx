import Checkbox from "./Checkbox";
import { IPayload } from "types/story";
import { useState } from "react";

const payload: IPayload = {
  title: "ATOMS/Checkbox",
  component: Checkbox,
};
export default payload;

export const Basic = (args: any) => {
  const [isSelected, setSelection] = useState(false);
  return (
    <Checkbox
      {...{ isSelected }}
      onClick={() => setSelection((prev) => !prev)}
      {...args}
    >
      <span>Testing</span>
    </Checkbox>
  );
};
Basic.args = {};
