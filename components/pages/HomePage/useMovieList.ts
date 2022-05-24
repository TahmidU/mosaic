import { useContext, useEffect, useState } from "react";

import GlobalContext from "context/GlobalContext";
import { IMovieCardProps } from "components/molecules/MovieCard/MovieCard";
import { IMovieDetails } from "types/api/explore";

export enum ExploreMovies {
  IN_THEATRES = "In Theatres",
  POPULAR = "Popular",
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
      Popular: [],
      "Top Rated": [],
      Upcoming: [],
    },
  });

  useEffect(() => {
    exploreMovieSelect(ExploreMovies.IN_THEATRES);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function exploreMovieSelect(select: ExploreMovies) {
    if (exploreMovies.cache[select].length === 0) {
      let apiRes: IMovieCardProps[] | undefined;

      switch (select) {
        case ExploreMovies.IN_THEATRES:
          apiRes = await getMovies("in_theatres");
          break;
        case ExploreMovies.POPULAR:
          apiRes = await getMovies("popular");
          break;
        case ExploreMovies.TOP_RATED:
          apiRes = await getMovies("top_rated");
          break;
        case ExploreMovies.UPCOMING:
          apiRes = await getMovies("upcoming");
          break;
        default:
          break;
      }

      apiRes &&
        setExploreMovies((prev) => ({
          selected: select,
          cache: {
            ...prev.cache,
            [select]: apiRes,
          },
        }));
    } else {
      setExploreMovies((prev) => ({
        selected: select,
        cache: {
          ...prev.cache,
        },
      }));
    }
  }

  async function getMovies(
    selectReq: "in_theatres" | "popular" | "upcoming" | "top_rated"
  ) {
    return await globalRequests?.api
      .get(`/explore/movies/${selectReq}`)
      .then((_result) => _result.data.results)
      .then((_results: IMovieDetails[]) =>
        _results.map((_result) => {
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

  return {
    exploreMovieSelect,
    exploreMoviesList: exploreMovies.cache[exploreMovies.selected],
  };
}
