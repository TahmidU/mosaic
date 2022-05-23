import { useContext, useEffect, useState } from "react";

import GlobalContext from "context/GlobalContext";
import { IMovieCardProps } from "components/molecules/MovieCard/MovieCard";
import { ITVShowDetails } from "types/api/explore";

export enum ExploreTVs {
  ON_AIR = "On Air",
  POPULAR = "Popular",
  TOP_RATED = "Top Rated",
}

type CacheExploreTV = {
  [key in ExploreTVs]: IMovieCardProps[];
};

interface IExploreTVsCache {
  selected: ExploreTVs;
  cache: CacheExploreTV;
}

export default function useTVList() {
  const { globalRequests } = useContext(GlobalContext);
  const [exploreTVs, setExploreTVs] = useState<IExploreTVsCache>({
    selected: ExploreTVs.ON_AIR,
    cache: {
      "On Air": [],
      Popular: [],
      "Top Rated": [],
    },
  });

  useEffect(() => {
    exploreTVSelect(ExploreTVs.ON_AIR);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function exploreTVSelect(select: ExploreTVs) {
    switch (select) {
      case ExploreTVs.ON_AIR:
        if (exploreTVs.cache["On Air"].length === 0) {
          getTVOnAir()?.then((_tv) =>
            setExploreTVs((prev) => ({
              selected: ExploreTVs.ON_AIR,
              cache: {
                ...prev.cache,
                "On Air": _tv,
              },
            }))
          );
        } else {
          setExploreTVs((prev) => ({
            selected: ExploreTVs.ON_AIR,
            cache: {
              ...prev.cache,
            },
          }));
        }
        break;
      case ExploreTVs.POPULAR:
        if (exploreTVs.cache["Popular"].length === 0) {
          getPopularTV()?.then((_tv) =>
            setExploreTVs((prev) => ({
              selected: ExploreTVs.POPULAR,
              cache: {
                ...prev.cache,
                Popular: _tv,
              },
            }))
          );
        } else {
          setExploreTVs((prev) => ({
            selected: ExploreTVs.POPULAR,
            cache: {
              ...prev.cache,
            },
          }));
        }
        break;
      case ExploreTVs.TOP_RATED:
        if (exploreTVs.cache["Top Rated"].length === 0) {
          getTopRatedTV()?.then((_tv) =>
            setExploreTVs((prev) => ({
              selected: ExploreTVs.TOP_RATED,
              cache: {
                ...prev.cache,
                "Top Rated": _tv,
              },
            }))
          );
        } else {
          setExploreTVs((prev) => ({
            selected: ExploreTVs.TOP_RATED,
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

  function getTVOnAir() {
    return globalRequests?.api
      .get(`/explore/tv_shows/on_air`)
      .then((_result) => _result.data.results)
      .then((_results: ITVShowDetails[]) =>
        _results.map((_result) => {
          const movieCardDetails: IMovieCardProps = {
            movieTitle: _result.name,
            movieReleaseDate: _result.first_air_date,
            src: `https://image.tmdb.org/t/p/original/${_result.poster_path}`,
            review: _result.vote_average,
          };
          return movieCardDetails;
        })
      );
  }

  function getPopularTV() {
    return globalRequests?.api
      .get(`/explore/tv_shows/popular`)
      .then((_result) => _result.data.results)
      .then((_results: ITVShowDetails[]) =>
        _results.map((_result) => {
          const movieCardDetails: IMovieCardProps = {
            movieTitle: _result.name,
            movieReleaseDate: _result.first_air_date,
            src: `https://image.tmdb.org/t/p/original/${_result.poster_path}`,
            review: _result.vote_average,
          };
          return movieCardDetails;
        })
      );
  }

  function getTopRatedTV() {
    return globalRequests?.api
      .get(`/explore/tv_shows/top_rated`)
      .then((_result) => _result.data.results)
      .then((_results: ITVShowDetails[]) =>
        _results.map((_result) => {
          const movieCardDetails: IMovieCardProps = {
            movieTitle: _result.name,
            movieReleaseDate: _result.first_air_date,
            src: `https://image.tmdb.org/t/p/original/${_result.poster_path}`,
            review: _result.vote_average,
          };
          return movieCardDetails;
        })
      );
  }

  return {
    exploreTVSelect,
    exploreTVsList: exploreTVs.cache[exploreTVs.selected],
  };
}
