import { IMovieCardProps } from "components/molecules/MovieCard/MovieCard";
import { IPayload } from "types/story";
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

const fakeAPI: { [key in ExploreMovies]: IMovieCardProps[] } = {
  "In Theatres": Array(20).fill({
    src:
      "https://image.tmdb.org/t/p/w220_and_h330_face/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
    review: 7.0,
    movieTitle: "Doctor Strange in the Multiverse of Madness",
    movieReleaseDate: "06-05-2022",
  }),
  Latest: Array(2).fill({
    src:
      "https://image.tmdb.org/t/p/w220_and_h330_face/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
    review: 7.0,
    movieTitle: "Doctor Strange in the Multiverse of Madness",
    movieReleaseDate: "06-05-2022",
  }),
  Popular: Array(3).fill({
    src:
      "https://image.tmdb.org/t/p/w220_and_h330_face/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
    review: 7.0,
    movieTitle: "Doctor Strange in the Multiverse of Madness",
    movieReleaseDate: "06-05-2022",
  }),
  "Top Rated": Array(4).fill({
    src:
      "https://image.tmdb.org/t/p/w220_and_h330_face/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
    review: 7.0,
    movieTitle: "Doctor Strange in the Multiverse of Madness",
    movieReleaseDate: "06-05-2022",
  }),
  Upcoming: Array(1).fill({
    src:
      "https://image.tmdb.org/t/p/w220_and_h330_face/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
    review: 7.0,
    movieTitle: "Doctor Strange in the Multiverse of Madness",
    movieReleaseDate: "06-05-2022",
  }),
};

export const Basic = () => {
  const [movies, setMovies] = useState(fakeAPI["In Theatres"]);

  function getFromFakeAPI(subTitle: ExploreMovies) {
    setMovies(fakeAPI[subTitle]);
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
      onSubTitleClick={(subTitle: ExploreMovies) => getFromFakeAPI(subTitle)}
      movies={movies}
    />
  );
};
