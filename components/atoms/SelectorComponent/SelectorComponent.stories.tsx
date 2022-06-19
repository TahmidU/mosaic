import { IPayload } from "types/story";
import SelectorComponent from "./SelectorComponent";

const payload: IPayload = {
  title: "ATOMS/SelectorComponent",
  component: SelectorComponent,
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
  <SelectorComponent
    options={[
      ExploreMovies.IN_THEATRES,
      ExploreMovies.POPULAR,
      ExploreMovies.LATEST,
      ExploreMovies.UPCOMING,
      ExploreMovies.TOP_RATED,
    ]}
    onChange={(selected) => console.log(selected)}
  />
);
Basic.args = {};
