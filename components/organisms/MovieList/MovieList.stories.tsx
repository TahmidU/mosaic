import { IPayload } from "types/story";
import { IShortMovieDetails } from "types/movie";
import MovieList from "./MovieList";
import { useState } from "react";

const payload: IPayload = {
  title: "ORGANISMS/MovieList",
  component: MovieList,
};
export default payload;

enum ExploreMovies {
  IN_THEATRES = "In Theatres",
  POPULAR = "Popular",
  LATEST = "Latest",
  UPCOMING = "Upcoming",
  TOP_RATED = "Top Rated",
}

const fakeAPI: { [key in ExploreMovies]: IShortMovieDetails[] } = {
  "In Theatres": Array(20)
    .fill({
      src: "",
      review: 7.0,
      movieTitle: "Doctor Strange in the Multiverse of Madness",
      movieReleaseDate: "06-05-2022",
    })
    .map((_fakeMovie, index) => ({
      ..._fakeMovie,
      src: `https://via.placeholder.com/220x330/000000?text=${index}`,
    })),
  Latest: Array(2)
    .fill({
      src: "",
      review: 7.0,
      movieTitle: "Doctor Strange in the Multiverse of Madness",
      movieReleaseDate: "06-05-2022",
    })
    .map((_fakeMovie, index) => ({
      ..._fakeMovie,
      src: `https://via.placeholder.com/220x330/000000?text=${index}`,
    })),
  Popular: Array(3)
    .fill({
      src: "",
      review: 7.0,
      movieTitle: "Doctor Strange in the Multiverse of Madness",
      movieReleaseDate: "06-05-2022",
    })
    .map((_fakeMovie, index) => ({
      ..._fakeMovie,
      src: `https://via.placeholder.com/220x330/000000?text=${index}`,
    })),
  "Top Rated": Array(4)
    .fill({
      src: "",
      review: 7.0,
      movieTitle: "Doctor Strange in the Multiverse of Madness",
      movieReleaseDate: "06-05-2022",
    })
    .map((_fakeMovie, index) => ({
      ..._fakeMovie,
      src: `https://via.placeholder.com/220x330/000000?text=${index}`,
    })),
  Upcoming: Array(1)
    .fill({
      src: "",
      review: 7.0,
      movieTitle: "Doctor Strange in the Multiverse of Madness",
      movieReleaseDate: "06-05-2022",
    })
    .map((_fakeMovie, index) => ({
      ..._fakeMovie,
      src: `https://via.placeholder.com/220x330/000000?text=${index}`,
    })),
};

export const Basic = () => {
  const [movies, setMovies] = useState(fakeAPI["In Theatres"]);

  function getFromFakeAPI(subTitle: string) {
    setMovies(fakeAPI[subTitle as ExploreMovies]);
  }

  return (
    <MovieList
      title="Explore Movies"
      subListTitles={[
        ExploreMovies.IN_THEATRES,
        ExploreMovies.POPULAR,
        ExploreMovies.LATEST,
        ExploreMovies.UPCOMING,
        ExploreMovies.TOP_RATED,
      ]}
      onSubTitleClick={(subTitle: string) => getFromFakeAPI(subTitle)}
      movies={movies}
    />
  );
};
