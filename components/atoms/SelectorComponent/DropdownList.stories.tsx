import DropdownList from "./DropdownList";
import { IPayload } from "types/story";
import { useState } from "react";

const payload: IPayload = {
  title: "ATOMS/SelectorComponent",
  component: DropdownList,
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
    <DropdownList
      options={[
        ExploreMovies.IN_THEATRES,
        ExploreMovies.POPULAR,
        ExploreMovies.LATEST,
        ExploreMovies.UPCOMING,
        ExploreMovies.TOP_RATED,
      ]}
      onChange={(selected) => console.log(selected)}
      selectedIndex={selectedIndex}
      setSelectedIndex={setSelectedIndex}
    />
  );
};
Basic.args = {};
