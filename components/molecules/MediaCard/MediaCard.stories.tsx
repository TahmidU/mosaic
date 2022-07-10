import { IPayload } from "types/story";
import MediaCard from "./MediaCard";

const payload: IPayload = {
  title: "MOLECULES/MediaCard",
  component: MediaCard,
};
export default payload;

export const Basic = (args: any) => <MediaCard {...args} />;
Basic.args = {};
