import { useContext, useEffect, useState } from "react";

import GlobalContext from "context/GlobalContext";
import { IExploreMovies } from "types/api/explore";
import { IMovieCardProps } from "components/molecules/MovieCard/MovieCard";

export enum ExploreMovies {
  IN_THEATRES = "In Theatres",
  POPULAR = "Popular",
  LATEST = "Latest",
  UPCOMING = "Upcoming",
  TOP_RATED = "Top Rated",
}

type CacheExploreMovies = {
  [key in ExploreMovies]: IMovieCardProps[];
};

interface IExploreMoviesCache {
  selected: ExploreMovies;
  cache: CacheExploreMovies;
}

export default function useMovieList() {
  const { globalRequests } = useContext(GlobalContext);
  const [exploreMovies, setExploreMovies] = useState<IExploreMoviesCache>({
    selected: ExploreMovies.IN_THEATRES,
    cache: {
      "In Theatres": [],
      Latest: [],
      Popular: [],
      "Top Rated": [],
      Upcoming: [],
    },
  });

  useEffect(() => {
    exploreMovieSelect(ExploreMovies.IN_THEATRES);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function exploreMovieSelect(select: ExploreMovies) {
    switch (select) {
      case ExploreMovies.IN_THEATRES:
        getMoviesInTheatres()?.then((_movies) =>
          setExploreMovies((prev) => ({
            selected: ExploreMovies.IN_THEATRES,
            cache: {
              ...prev.cache,
              "In Theatres": _movies,
            },
          }))
        );
        break;
      case ExploreMovies.LATEST:
        getLatestMovies();
        break;
      case ExploreMovies.POPULAR:
        getPopularMovies();
        break;
      case ExploreMovies.TOP_RATED:
        getTopRatedMovies();
        break;
      case ExploreMovies.UPCOMING:
        getUpcomingMovies();
        break;
      default:
        break;
    }
  }

  function getMoviesInTheatres() {
    return globalRequests?.api
      .get(`/explore/movies`)
      .then((res) => res.data.results)
      .then((results: IExploreMovies[]) =>
        results.map((_result) => {
          const movieCardDetails: IMovieCardProps = {
            movieTitle: _result.title,
            movieReleaseDate: _result.release_date,
            src: `https://image.tmdb.org/t/p/original/${_result.poster_path}`,
            review: _result.vote_average,
          };
          return movieCardDetails;
        })
      );
  }

  function getLatestMovies() {}

  function getPopularMovies() {}

  function getTopRatedMovies() {}

  function getUpcomingMovies() {}

  return {
    exploreMovieSelect,
    exploreMoviesList: exploreMovies.cache[exploreMovies.selected],
  };
}
