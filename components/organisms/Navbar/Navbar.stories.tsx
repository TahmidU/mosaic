import { IPayload } from "types/story";
import Navbar from "./Navbar";
import { RouterContext } from "next/dist/shared/lib/router-context";

const payload: IPayload = {
  title: "ORGANISMS/Navbar",
  component: Navbar,
};
export default payload;

const router: any = {
  route: "/search",
  pathname: "/search",
  query: { type: "movie" },
  asPath: "/search",
  basePath: "/search",
};

export const Basic = (args: any) => (
  <RouterContext.Provider value={router}>
    <Navbar {...args} />
  </RouterContext.Provider>
);
Basic.args = {};
