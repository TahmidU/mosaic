import CastCard from "./CastCard";
import { IPayload } from "types/story";

const payload: IPayload = {
  title: "MOLECULES/CastCard",
  component: CastCard,
};
export default payload;

export const Basic = (args: any) => <CastCard {...args} />;
Basic.args = {};
