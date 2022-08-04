import { IPayload } from "types/story";
import { Links } from "utils";
import MediaCard from "./MediaCard";

const payload: IPayload = {
  title: "MOLECULES/MediaCard",
  component: MediaCard,
};
export default payload;

export const Basic = (args: any) => (
  <MediaCard
    title="Official Trailer"
    src={`${Links.youtubeThumbnailURL}GfbNLLcrItI/hqdefault.jpg`}
    {...args}
  />
);
Basic.args = {};
