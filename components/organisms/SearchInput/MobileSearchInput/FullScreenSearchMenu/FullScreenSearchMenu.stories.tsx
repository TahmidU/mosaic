import FullScreenSearchMenu from "./FullScreenSearchMenu";
import { IPayload } from "types/story";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { useState } from "react";

const payload: IPayload = {
  title: "MOLECULES/FullScreenSearchMenu",
  component: FullScreenSearchMenu,
};
export default payload;

const router: any = {
  route: "/search",
  pathname: "/search",
  query: { type: "movie" },
  asPath: "/search",
  basePath: "/search",
};

export const Basic = (args: any) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <RouterContext.Provider value={router}>
      <div>
        <button onClick={() => setOpen(true)}>Open</button>
        <FullScreenSearchMenu
          isMenuOpen={isOpen}
          setMenuOpen={setOpen}
          {...args}
        />
      </div>
    </RouterContext.Provider>
  );
};
Basic.args = {};
