import { IPayload } from "types/story";
import SearchBtn from "./SearchBtn";

const payload: IPayload = {
  title: "ATOMS/SearchBtn",
  component: SearchBtn,
};
export default payload;

export const Basic = (args: any) => <SearchBtn {...args} />;
Basic.args = {};
