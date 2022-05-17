import MovieCard, { IMovieCardProps } from "./MovieCard";

import { IPayload } from "types/story";

const payload: IPayload = {
  title: "MOLECULES/MovieCard",
  component: MovieCard,
};
export default payload;

export const Basic = (args: IMovieCardProps) => <MovieCard {...args} />;
Basic.args = {
  src:
    "https://image.tmdb.org/t/p/w220_and_h330_face/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
  review: 7.0,
  movieTitle: "Doctor Strange in the Multiverse of Madness",
  movieReleaseDate: "06-05-2022",
};
