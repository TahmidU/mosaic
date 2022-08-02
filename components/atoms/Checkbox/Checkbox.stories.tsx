import Checkbox from "./Checkbox";
import { IPayload } from "types/story";
import { useState } from "react";

const payload: IPayload = {
  title: "ATOMS/Checkbox",
  component: Checkbox,
};
export default payload;

export const Basic = () => {
  const [isSelected, setSelection] = useState(false);
  return (
    <Checkbox
      isSelected={isSelected}
      onClick={() => setSelection((prev) => !prev)}
    >
      <span>Testing</span>
    </Checkbox>
  );
};
