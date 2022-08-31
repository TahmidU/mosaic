import { IPayload } from "types/story";
import SelectTitleList from "./SelectTitleList";
import { useState } from "react";

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

export const Basic = (args: any) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <SelectTitleList
      options={[
        ExploreMovies.IN_THEATRES,
        ExploreMovies.POPULAR,
        ExploreMovies.LATEST,
        ExploreMovies.UPCOMING,
        ExploreMovies.TOP_RATED,
      ]}
      onChange={(selected: string) => console.log(selected)}
      selectedIndex={selectedIndex}
      setSelectedIndex={setSelectedIndex}
    />
  );
};
Basic.args = {};
