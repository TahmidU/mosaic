import { IPayload } from "types/story";
import SelectTitleList from "./SelectTitleList";

const payload: IPayload = {
  title: "ATOMS/SelectTitleList",
  component: SelectTitleList,
};
export default payload;

enum ExploreMovies {
  IN_THEATRES = "In Theatres",
  POPULAR = "Popular",
  LATEST = "Latest",
  UPCOMING = "Upcoming",
  TOP_RATED = "Top Rated",
}

export const Basic = (args: any) => (
  <SelectTitleList
    options={[
      ExploreMovies.IN_THEATRES,
      ExploreMovies.POPULAR,
      ExploreMovies.LATEST,
      ExploreMovies.UPCOMING,
      ExploreMovies.TOP_RATED,
    ]}
    onChange={(selected: ExploreMovies) => console.log(selected)}
    {...args}
  />
);
Basic.args = {};
