import HorizontalList from "components/atoms/HorizontalList";
import { IMovieCardProps } from "components/molecules/MovieCard/MovieCard";
import MovieCard from "components/molecules/MovieCard";
import { MovieCardWrapper } from "./styles";
import { ReactElement } from "react";

interface IMovieListProps<T> {
  title: string;
  subListTitles: T[];
  movies?: IMovieCardProps[];
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
