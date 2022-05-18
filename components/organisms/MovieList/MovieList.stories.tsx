import { IPayload } from "types/story";
import MovieList from "./MovieList";

const payload: IPayload = {
  title: "ORGANISMS/MovieList",
  component: MovieList,
};
export default payload;

export const Basic = (args: any) => <MovieList {...args} />;
Basic.args = {
  title: "Explore Movies",
  subMovieList: [
    {
      title: "In Theatres",
      movies: [
        {
          src:
            "https://image.tmdb.org/t/p/w220_and_h330_face/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
          review: 7.0,
          movieTitle: "Doctor Strange in the Multiverse of Madness",
          movieReleaseDate: "06-05-2022",
        },
        {
          src:
            "https://image.tmdb.org/t/p/w220_and_h330_face/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
          review: 7.0,
          movieTitle: "Doctor Strange in the Multiverse of Madness",
          movieReleaseDate: "06-05-2022",
        },
        {
          src:
            "https://image.tmdb.org/t/p/w220_and_h330_face/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
          review: 7.0,
          movieTitle: "Doctor Strange in the Multiverse of Madness",
          movieReleaseDate: "06-05-2022",
        },
        {
          src:
            "https://image.tmdb.org/t/p/w220_and_h330_face/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
          review: 7.0,
          movieTitle: "Doctor Strange in the Multiverse of Madness",
          movieReleaseDate: "06-05-2022",
        },
        {
          src:
            "https://image.tmdb.org/t/p/w220_and_h330_face/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
          review: 7.0,
          movieTitle: "Doctor Strange in the Multiverse of Madness",
          movieReleaseDate: "06-05-2022",
        },
        {
          src:
            "https://image.tmdb.org/t/p/w220_and_h330_face/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
          review: 7.0,
          movieTitle: "Doctor Strange in the Multiverse of Madness",
          movieReleaseDate: "06-05-2022",
        },
        {
          src:
            "https://image.tmdb.org/t/p/w220_and_h330_face/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
          review: 7.0,
          movieTitle: "Doctor Strange in the Multiverse of Madness",
          movieReleaseDate: "06-05-2022",
        },
        {
          src:
            "https://image.tmdb.org/t/p/w220_and_h330_face/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
          review: 7.0,
          movieTitle: "Doctor Strange in the Multiverse of Madness",
          movieReleaseDate: "06-05-2022",
        },
        {
          src:
            "https://image.tmdb.org/t/p/w220_and_h330_face/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
          review: 7.0,
          movieTitle: "Doctor Strange in the Multiverse of Madness",
          movieReleaseDate: "06-05-2022",
        },
        {
          src:
            "https://image.tmdb.org/t/p/w220_and_h330_face/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
          review: 7.0,
          movieTitle: "Doctor Strange in the Multiverse of Madness",
          movieReleaseDate: "06-05-2022",
        },
        {
          src:
            "https://image.tmdb.org/t/p/w220_and_h330_face/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
          review: 7.0,
          movieTitle: "Doctor Strange in the Multiverse of Madness",
          movieReleaseDate: "06-05-2022",
        },
        {
          src:
            "https://image.tmdb.org/t/p/w220_and_h330_face/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
          review: 7.0,
          movieTitle: "Doctor Strange in the Multiverse of Madness",
          movieReleaseDate: "06-05-2022",
        },
      ],
    },
    {
      title: "Popular",
      movies: [
        {
          src:
            "https://image.tmdb.org/t/p/w220_and_h330_face/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
          review: 7.0,
          movieTitle: "Doctor Strange in the Multiverse of Madness",
          movieReleaseDate: "06-05-2022",
        },
        {
          src:
            "https://image.tmdb.org/t/p/w220_and_h330_face/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
          review: 7.0,
          movieTitle: "Doctor Strange in the Multiverse of Madness",
          movieReleaseDate: "06-05-2022",
        },
        {
          src:
            "https://image.tmdb.org/t/p/w220_and_h330_face/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
          review: 7.0,
          movieTitle: "Doctor Strange in the Multiverse of Madness",
          movieReleaseDate: "06-05-2022",
        },
      ],
    },
    {
      title: "Latest",
      movies: [
        {
          src:
            "https://image.tmdb.org/t/p/w220_and_h330_face/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
          review: 7.0,
          movieTitle: "Doctor Strange in the Multiverse of Madness",
          movieReleaseDate: "06-05-2022",
        },
        {
          src:
            "https://image.tmdb.org/t/p/w220_and_h330_face/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
          review: 7.0,
          movieTitle: "Doctor Strange in the Multiverse of Madness",
          movieReleaseDate: "06-05-2022",
        },
        {
          src:
            "https://image.tmdb.org/t/p/w220_and_h330_face/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
          review: 7.0,
          movieTitle: "Doctor Strange in the Multiverse of Madness",
          movieReleaseDate: "06-05-2022",
        },
      ],
    },
    {
      title: "Upcoming",
      movies: [
        {
          src:
            "https://image.tmdb.org/t/p/w220_and_h330_face/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
          review: 7.0,
          movieTitle: "Doctor Strange in the Multiverse of Madness",
          movieReleaseDate: "06-05-2022",
        },
        {
          src:
            "https://image.tmdb.org/t/p/w220_and_h330_face/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
          review: 7.0,
          movieTitle: "Doctor Strange in the Multiverse of Madness",
          movieReleaseDate: "06-05-2022",
        },
        {
          src:
            "https://image.tmdb.org/t/p/w220_and_h330_face/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
          review: 7.0,
          movieTitle: "Doctor Strange in the Multiverse of Madness",
          movieReleaseDate: "06-05-2022",
        },
      ],
    },
    {
      title: "Top Rated",
      movies: [
        {
          src:
            "https://image.tmdb.org/t/p/w220_and_h330_face/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
          review: 7.0,
          movieTitle: "Doctor Strange in the Multiverse of Madness",
          movieReleaseDate: "06-05-2022",
        },
        {
          src:
            "https://image.tmdb.org/t/p/w220_and_h330_face/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
          review: 7.0,
          movieTitle: "Doctor Strange in the Multiverse of Madness",
          movieReleaseDate: "06-05-2022",
        },
        {
          src:
            "https://image.tmdb.org/t/p/w220_and_h330_face/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
          review: 7.0,
          movieTitle: "Doctor Strange in the Multiverse of Madness",
          movieReleaseDate: "06-05-2022",
        },
      ],
    },
  ],
};
