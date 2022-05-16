import { IPayload } from "types/story";
import MovieCard from "./MovieCard";

const payload: IPayload = {
  title: "MOLECULES/MovieCard",
  component: MovieCard,
};
export default payload;

export const Basic = (args: any) => <MovieCard {...args} />;
Basic.args = {};
