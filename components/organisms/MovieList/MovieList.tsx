import {
  IMovieCardDefaultProps,
  IMovieCardProps,
} from "components/molecules/MovieCard/MovieCard";

import HorizontalList from "components/molecules/HorizontalList";
import MovieCard from "components/molecules/MovieCard";
import { MovieCardWrapper } from "./styles";
import { ReactElement } from "react";

interface IMovieListProps<T> {
  title: string;
  subListTitles: T[];
  movies?: IMovieCardDefaultProps[];
  onSubTitleClick: (title: T) => void;
  className?: string;
  loading?: boolean;
}

export default function MovieList<T>({
  title,
  subListTitles,
  onSubTitleClick,
  movies,
  className,
  loading = false,
}: IMovieListProps<T>): ReactElement {
  return (
    <HorizontalList
      title={title}
      subListTitles={subListTitles}
      onSubTitleClick={onSubTitleClick}
      className={className}
      loading={loading}
    >
      {movies &&
        movies.map((_movie, index) => {
          return (
            <MovieCardWrapper key={index}>
              <MovieCard
                variant="default"
                src={_movie.src}
                review={_movie.review}
                movieTitle={_movie.movieTitle}
                movieReleaseDate={_movie.movieReleaseDate}
              />
            </MovieCardWrapper>
          );
        })}
    </HorizontalList>
  );
}
