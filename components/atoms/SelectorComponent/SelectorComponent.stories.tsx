import { IPayload } from "types/story";
import SelectorComponent from "./SelectorComponent";

const payload: IPayload = {
  title: "ATOMS/SelectorComponent",
  component: SelectorComponent,
};
export default payload;

const options = ["In Theatres", "Popular", "Upcoming"];

export const Basic = (args: any) => <SelectorComponent options={options} />;
Basic.args = {};
