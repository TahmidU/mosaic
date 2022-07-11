import { MovieCardStyle, MovieCardWrapper } from "./styles";
import { ReactElement, useContext } from "react";

import GlobalContext from "context/GlobalContext";
import HorizontalList from "components/molecules/HorizontalList";
import { IShortMovieDetails } from "types/movie";

interface IMovieListProps<T> {
  title: string;
  subListTitles: T[];
  movies?: IShortMovieDetails[];
  onSubTitleClick: (title: T) => void;
  className?: string;
  loading?: boolean;
  type?: "tv" | "movie";
}

export default function MovieList<T>({
  title,
  subListTitles,
  onSubTitleClick,
  movies,
  className,
  loading = false,
  type = "movie",
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
          return (
            <MovieCardWrapper key={index}>
              <MovieCardStyle
                src={_movie.src}
                review={_movie.review}
                movieTitle={_movie.movieTitle}
                movieReleaseDate={_movie.movieReleaseDate}
                onClick={() => routes?.goToDetails(_movie.id, type)}
              />
            </MovieCardWrapper>
          );
        })}
    </HorizontalList>
  );
}
