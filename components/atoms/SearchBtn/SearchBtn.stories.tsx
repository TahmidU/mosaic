import { IPayload } from "types/story";
import SearchBtn from "./SearchBtn";

const payload: IPayload = {
  title: "ATOMS/SearchBtn",
  component: SearchBtn,
};
export default payload;

export const Basic = (args: any) => (
  <div style={{ width: "100%", display: "flex", flexDirection: "row-reverse" }}>
    <SearchBtn {...args} />
  </div>
);
Basic.args = {};
