import { useContext, useEffect, useState } from "react";

import GlobalContext from "context/GlobalContext";

enum ExploreMovies {
  IN_THEATRES = "In Theatres",
  POPULAR = "Popular",
  LATEST = "Latest",
  UPCOMING = "Upcoming",
  TOP_RATED = "Top Rated",
}

export default function useHomePageRequests() {
  const { globalRequests } = useContext(GlobalContext);
  const [movies, setMovies] = useState();

  useEffect(() => {
    //console.log(getMoviesInTheatres());
  }, []);

  function getMoviesInTheatres() {
    return globalRequests?.api.get(`/movie/now_playing`);
  }

  return {
    getMoviesInTheatres,
  };
}
