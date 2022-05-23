import Clips from "./Clips";
import { IPayload } from "types/story";

const payload: IPayload = {
  title: "MOLECULES/Clips",
  component: Clips,
};
export default payload;

export const Basic = () => <Clips onClipClickedCallback={() => {}} />;
Basic.args = {};
