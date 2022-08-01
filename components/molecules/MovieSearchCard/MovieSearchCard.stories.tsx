import { IPayload } from "types/story";
import MovieSearchCard from "./MovieSearchCard";

const payload: IPayload = {
  title: "MOLECULES/MovieSearchCard",
  component: MovieSearchCard,
};
export default payload;

export const Basic = (args: any) => <MovieSearchCard {...args} />;
Basic.args = {
  title: "FooBar",
  desc:
    "Lo ipsum foobar random description. Lo ipsum foobar random description. Lo ipsum foobar random description. Lo ipsum foobar random description. Lo ipsum foobar random description. Lo ipsum foobar random description. Lo ipsum foobar random description.",
  src:
    "https://image.tmdb.org/t/p/w220_and_h330_face/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
};
