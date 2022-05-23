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

  function exploreMovieSelect(select: ExploreMovies) {
    switch (select) {
      case ExploreMovies.IN_THEATRES:
        if (exploreMovies.cache["In Theatres"].length === 0) {
          getMoviesInTheatres()?.then((_movies) =>
            setExploreMovies((prev) => ({
              selected: ExploreMovies.IN_THEATRES,
              cache: {
                ...prev.cache,
                "In Theatres": _movies,
              },
            }))
          );
        } else {
          setExploreMovies((prev) => ({
            selected: ExploreMovies.IN_THEATRES,
            cache: {
              ...prev.cache,
            },
          }));
        }
        break;
      case ExploreMovies.POPULAR:
        if (exploreMovies.cache["Popular"].length === 0) {
          getPopularMovies()?.then((_movies) =>
            setExploreMovies((prev) => ({
              selected: ExploreMovies.POPULAR,
              cache: {
                ...prev.cache,
                Popular: _movies,
              },
            }))
          );
        } else {
          setExploreMovies((prev) => ({
            selected: ExploreMovies.POPULAR,
            cache: {
              ...prev.cache,
            },
          }));
        }
        break;
      case ExploreMovies.TOP_RATED:
        if (exploreMovies.cache["Top Rated"].length === 0) {
          getTopRatedMovies()?.then((_movies) =>
            setExploreMovies((prev) => ({
              selected: ExploreMovies.TOP_RATED,
              cache: {
                ...prev.cache,
                "Top Rated": _movies,
              },
            }))
          );
        } else {
          setExploreMovies((prev) => ({
            selected: ExploreMovies.TOP_RATED,
            cache: {
              ...prev.cache,
            },
          }));
        }
        break;
      case ExploreMovies.UPCOMING:
        if (exploreMovies.cache["Upcoming"].length === 0) {
          getUpcomingMovies()?.then((_movies) =>
            setExploreMovies((prev) => ({
              selected: ExploreMovies.UPCOMING,
              cache: {
                ...prev.cache,
                Upcoming: _movies,
              },
            }))
          );
        } else {
          setExploreMovies((prev) => ({
            selected: ExploreMovies.UPCOMING,
            cache: {
              ...prev.cache,
            },
          }));
        }
        break;
      default:
        break;
    }
  }

  function getMoviesInTheatres() {
    return globalRequests?.api
      .get(`/explore/movies/in_theatres`)
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

  function getPopularMovies() {
    return globalRequests?.api
      .get(`explore/movies/popular`)
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

  function getTopRatedMovies() {
    return globalRequests?.api
      .get(`explore/movies/top_rated`)
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

  function getUpcomingMovies() {
    return globalRequests?.api
      .get(`explore/movies/upcoming`)
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
