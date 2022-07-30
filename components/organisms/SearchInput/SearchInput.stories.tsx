import { IPayload } from "types/story";
import SearchInput from "./SearchInput";

const payload: IPayload = {
  title: "ORGANISMS/SearchInput",
  component: SearchInput,
};
export default payload;

export const Basic = (args: any) => (
  <div style={{ width: "100%", display: "flex", flexDirection: "row-reverse" }}>
    <SearchInput {...args} />
  </div>
);
Basic.args = {};
