import { IPayload } from "types/story";
import MovieCard from "./MovieCard";

const payload: IPayload = {
  title: "MOLECULES/MovieCard",
  component: MovieCard,
};
export default payload;

export const Default = (args: any) => <MovieCard {...args} />;
Default.args = {
  src:
    "https://image.tmdb.org/t/p/w220_and_h330_face/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
  review: 7.0,
  movieTitle: "Doctor Strange in the Multiverse of Madness",
  movieReleaseDate: "06-05-2022",
};
Default.parameters = {
  controls: { include: ["src", "review", "movieTitle", "movieReleaseDate"] },
};
