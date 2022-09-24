import { IPayload } from "types/story";
import MobileSearchInput from "./MobileSearchInput";
import { RouterContext } from "next/dist/shared/lib/router-context";

const payload: IPayload = {
  title: "ORGANISMS/MobileSearchInput",
  component: MobileSearchInput,
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
    <MobileSearchInput {...args} />
  </RouterContext.Provider>
);
Basic.args = {};
