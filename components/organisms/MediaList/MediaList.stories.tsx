import { IPayload } from "types/story";
import MediaList from "./MediaList";

const payload: IPayload = {
  title: "ORGANISMS/MediaList",
  component: MediaList,
};
export default payload;

export const Basic = (args: any) => <MediaList {...args} />;
Basic.args = {};
