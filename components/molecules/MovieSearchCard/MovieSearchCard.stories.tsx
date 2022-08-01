import { IPayload } from "types/story";
import MovieSearchCard from "./MovieSearchCard";

const payload: IPayload = {
  title: "MOLECULES/MovieSearchCard",
  component: MovieSearchCard,
};
export default payload;

export const Basic = (args: any) => <MovieSearchCard {...args} />;
Basic.args = {};
