import { IPayload } from "types/story";
import SearchCard from "./SearchCard";

const payload: IPayload = {
  title: "MOLECULES/SearchCard",
  component: SearchCard,
};
export default payload;

export const Basic = (args: any) => <SearchCard {...args} />;
Basic.args = {
  title: "FooBar",
  desc:
    "Lo ipsum foobar random description. Lo ipsum foobar random description. Lo ipsum foobar random description. Lo ipsum foobar random description. Lo ipsum foobar random description. Lo ipsum foobar random description. Lo ipsum foobar random description.",
  src:
    "https://image.tmdb.org/t/p/w220_and_h330_face/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
  rating: 5,
  releaseDate: "2022-01-02",
};
