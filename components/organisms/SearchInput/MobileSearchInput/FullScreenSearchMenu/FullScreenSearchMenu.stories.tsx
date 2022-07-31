import FullScreenSearchMenu from "./FullScreenSearchMenu";
import { IPayload } from "types/story";
import { useState } from "react";

const payload: IPayload = {
  title: "MOLECULES/FullScreenSearchMenu",
  component: FullScreenSearchMenu,
};
export default payload;

export const Basic = (args: any) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(true)}>Open</button>
      <FullScreenSearchMenu
        isMenuOpen={isOpen}
        setMenuOpen={setOpen}
        {...args}
      />
    </div>
  );
};
Basic.args = {};
