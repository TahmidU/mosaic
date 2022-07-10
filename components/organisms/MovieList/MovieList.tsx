import { ReactElement, useContext } from "react";

import GlobalContext from "context/GlobalContext";
import HorizontalList from "components/molecules/HorizontalList";
import { IShortMovieDetails } from "types/movie";
import MovieCard from "components/molecules/MovieCard";
import { MovieCardWrapper } from "./styles";

interface IMovieListProps<T> {
  title: string;
  subListTitles: T[];
  movies?: IShortMovieDetails[];
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
  const { routes } = useContext(GlobalContext);
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
          console.log(_movie.id);
          return (
            <MovieCardWrapper key={index}>
              <MovieCard
                src={_movie.src}
                review={_movie.review}
                movieTitle={_movie.movieTitle}
                movieReleaseDate={_movie.movieReleaseDate}
                onClick={() => routes?.goToMovieDetails(_movie.id)}
              />
            </MovieCardWrapper>
          );
        })}
    </HorizontalList>
  );
}
